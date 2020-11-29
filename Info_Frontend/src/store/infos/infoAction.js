export const saveInfos = (info) =>{
    return{
        type:"SAVE",
        info
    }
}

export const getInfos = () =>{
    return{
        type:"GET"
    }
}