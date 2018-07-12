import {getuses,getLogin,upPic,getLog} from '../http/index';
import { setTimeout } from 'timers';

export const actionsUser =  ({commit},datas)=>{
     getuses(datas).then(function({data}){

        commit("upDics",data.msg);

     });
    
}

export const actionsLogin = ({commit},datas)=>{
    
      getLogin(datas).then(({data})=>{
       
        if(data.error == 0){

            sessionStorage.setItem("Token",data.tokens);
            setTimeout(()=>{

                //跳转到首页
                datas.router.replace('/');
            },2000);
        }

        commit("upDics",data);
        //保存会话到浏览器
       // sessionStorage.setItem("Token",data.tokens);
        //
        //
        
    });
    
};

export const updataPic = ({commit},datas)=>{

    upPic(datas).then((data)=>{
        let arr = [];
        arr.push(data.data);
      
        commit("Hint",arr);
    });
}

export const actionsLog = ({commit})=>{
    getLog().then(({data})=>{
        commit('setList',data);
    });
}
