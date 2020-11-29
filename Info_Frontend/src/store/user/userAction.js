const saveUser = (info) =>{
    return{
        type:"SAVEUSER",
        info
    }
}

const getUser = () =>{
    return{
        type:"GETUSER"
    }
}

const logOutUser = () =>{
    return{
        type:"LOGOUT"
    }
}


export {saveUser,getUser,logOutUser}