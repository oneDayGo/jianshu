

const Router = require('koa-router');
const sha1 = require('sha1');
const verfiy = require('../lib/verfiy');
const token = require('../lib/token.js');
const fs = require('fs');
const router = new Router();

const path = require('path');

const koaBody = require('koa-body');

const db = require('../config/db.js');
router.post('/sign',async(ctx,next)=>{

   
    let figNumber =  verfiy.verfiy(ctx.request.body.params,ctx);
    if(!figNumber){

        return;
    }
    let par = ctx.request.body.params;

    //查询
    let qdata = await db.query(`select * from user where user='${par.user}'`);
    if(typeof qdata == 'object'){
        
        if(qdata.length){
            ctx.body = {"error":1,msg:"亲!用户已存在请换个昵称"};
        }else{
         let upObj =[];
         upObj.push(`'${par.user}'`);
         upObj.push(`'${sha1(par.psd)}'`);
         upObj.push(`'/public/uploads/1.png'`);
         upObj.push(`'这个家伙很懒!什么都没留下'`);

         let sql = `insert into  user(user,password,pic,sign) values(${upObj.join(',')})`;
        let up =  await db.query(sql);
        if(up.insertId>0){
            //注册成功
            ctx.body = {"error":0,msg:"注册成功"};
        }
        
        }
    }else{
        ctx.body = {"error":1,msg:"注册失败"};
        return;
    }
    

    

})

router.post('/login',async(ctx,next)=>{

    
    let figNumber =  verfiy.verfiy(ctx.request.body.params,ctx);
    if(!figNumber){
        return;
    }

    let par = ctx.request.body.params;
  
   

    let qdata = await db.query(`select * from user where user='${par.user}'`);
    if(typeof qdata == 'object'){
        
        if(qdata.length){
           
            if(qdata[0].password != sha1(par.psd)){
                ctx.body = {'error':1,msg:"密码错误,请重新输入"};
                return;
            }else{
                  
                  //console.log();
                ctx.body = {'error':0,msg:"登录成功","tokens":token.setToken(qdata[0].id)};
            }

        }else{
            ctx.body = {"error":1,msg:"用户不存在!请先注册先..."};
        }
    }else{
        ctx.body = {"error":1,msg:"登录失败"};
        return;
    }

   
})


//图片和说说上传接口  //,upload.single('pic')

router.post('/uploads',koaBody({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable:{
      uploadDir:'public/uploads/', // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      //maxFieldsSize:2* 1024 * 1024, // 文件上传大小
      maxFileSize:20*1024*1024, //设置上传大小
      multiples:true,
    }
    
  })
,async(ctx,next)=>{
    
    //console.log(ctx.header['authorization']);
    if(ctx.header['authorization'] != 'null'){

        let tokens = await token.verifyToken(ctx.header['authorization']);
        //判断用户是否登录
        if(tokens.error){
            return ctx.body = {"error":1,"msg":"请登录先"};
        }

    }else{
        return ctx.body = {"error":1,"msg":"请登录先"};
      
    }

   





    var picArr = null;
    let content = ctx.request.body.text;
    var arr =  ctx.request.files.pic;
    console.log(arr);
   // console.log(arr);
   
    var time = new Date().getTime();
    let sql = null;
    //console.log(typeof arr);
    //object
    //object.prototype.cell().toString(arr);
    console.log(Object.prototype.toString.call(arr));
    let types = Object.prototype.toString.call(arr);

    if(types == '[object Object]'){
        let count = arr.path.lastIndexOf('\\');
        if(count){
             picArr = arr.path.substring(count+1);
        }
        
        picArr = "uploads/"+picArr+"~";
        
        sql = `insert into record (pid,content,picList,time) values('1','${content}','${picArr.toString()}',${time})`;

    }else if(types == '[object Array]'){

        picArr = [];
        for(let i=0;i<arr.length;i++){

            let count = arr[i].path.lastIndexOf('\\');
            let str = null;
            if(count){
                str = arr[i].path.substring(count+1);
           }
           str = "uploads/"+str;
            picArr.push(str);
           
        }

        sql = `insert into record (pid,content,picList,time) values('1','${content}','${picArr.join('~').toString()}',${time})`;

    }else if(types == '[object Undefined]'){
        sql = `insert into record (pid,content,time) values('1','${content}','${time}')`;
    }
    


    if(content.trim() == ""){
        if(typeof picArr == 'object' && picArr != null ){

            for(var k =0;k<picArr.length;k++){

               fs.unlinkSync(path.resolve(__dirname, '..')+'/'+picArr[k]);
              
            }
        }else if(typeof picArr == 'string'){
            fs.unlinkSync(path.resolve(__dirname, '..')+'/'+picArr);
        }

        return ctx.body = {"error":1,"msg":"内容不能为空"};
    }
    
  
   let returnInserId = await db.query(sql);
   if(returnInserId.insertId){
     return ctx.body = {"error":0,"msg":"插入成功"};
   }else{
    return  ctx.body = {"error":1,"msg":"插入失败"}; 
   }
  
  

});




//获得日志
router.post('/log',async(ctx,next)=>{
    let qdata = await db.query(`select * from record`);
    //console.log(qdata);
    
    ctx.body = qdata;
})






module.exports = router.routes();