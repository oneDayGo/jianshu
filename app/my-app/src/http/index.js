import axios from 'axios';

//注册接口
export const getuses = (datas)=>{
    
       return axios.post('/api/login/sign',{
            params:{
                user:datas.user,
                psd:datas.password
            }
        });
    
    
}

//登录接口
export const getLogin = (datas)=>{

    return axios.post('/api/login/login',{
        params:{
            user:datas.user,
            psd:datas.password
        }
    });

}


//图片上传接口
export const upPic = (datas)=>{
    var formData = new FormData();
    for(var i =0;i<datas['list'].length;i++){
        formData.append("pic",datas['list'][i]);
    }
    
    formData.append("text",datas['text']);

    return axios({
        url:'/api/login/uploads',
        method:'post',
        data:formData,
        headers:{'Authorization':sessionStorage.getItem("Token")}
    
    });

    
}

//获取说说
export  const getLog = ()=>{
    
   return axios({
        url:'/api/login/log',
        method:'post',
        headers:{'Authorization':sessionStorage.getItem("Token")}
    });

}
