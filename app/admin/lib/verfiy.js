exports.verfiy = function(par,ctx){
    
    try{
        if((!par.user) && (!par.user.trim().length)){
          throw new Error("用户名不能为空");
        }
        if((!par.psd) && (!par.user.trim().psd)){
          throw new Error("密码不能为空");
        }
    }catch(e){
       ctx.body = e.message;
       return 0;
    }
    return 1;

}

