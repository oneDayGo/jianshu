export const upisError = (state,fig)=>{
    state.isError = fig;
};

export const upDics = (state,str)=>{
    state.dics = str;
}

export const showPic = (state,obj)=>{
    
    state.isShowMaxPic = obj.isTrue;
    state.picUrl = obj.picUrl;
}

export const Hint = (state,obj)=>{
    state.hint = obj;
    setTimeout(()=>{
        state.hint = [];
    },2000);
}

export const closeLogin = (state,fig)=>{
   
    state.closeLogin = fig;
}

export const setList = (state,data)=>{
    state.list = data;
}