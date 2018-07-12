const jwt = require('jsonwebtoken');
const secret = 'ajdjdjdjdj*8***&&&@@@@@@';


module.exports = {

   setToken:function(id){

        return jwt.sign({
            name:id+'&*%%@'
        }, secret, {
            expiresIn:60*60*24 //秒到期时间
        });
   },
   verifyToken:function(token){
   return new Promise((relove,reject)=>{

        jwt.verify(token, secret, function (err, decoded) {
            if (err){
                //表示到了过期时间了
                let objs = {"error":true};
                 reject(objs)  
            }else{
                
                let userId = decoded.name.split("&")[0];
                let obj = {"error":false,"id":userId};
                //console.log(obj);
                 relove(obj);
            }
        })

    });
    

   }

};