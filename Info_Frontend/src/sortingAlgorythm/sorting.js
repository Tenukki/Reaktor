
const sorting = (list,word) =>{
        
        return list.sort((a,b) => {
                if(a.title.toLowerCase().includes(word.toLowerCase())){
                        return -1;
                }else if(b.title.toLowerCase().includes(word.toLowerCase())){
                        return 1;
                }else{

                        if(a.text.toLowerCase().includes(word.toLowerCase())){
                                return -1
                        }else if(b.text.toLowerCase().includes(word.toLowerCase())){
                                return 1;
                        }else{
                                return 0;
                        }
                        
                        
                }
        } 
)}

export default sorting