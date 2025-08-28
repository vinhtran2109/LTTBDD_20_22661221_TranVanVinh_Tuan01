export const rejectPromiseAfter1s = (): Promise<string> => {
    return new Promise((resolve,reject) =>{
        const success = false;
        if(success){
            setTimeout(() =>{
                resolve("Success")
            },1000);
        }else{
            setTimeout(()=>{
                reject("Something went wrong")
            },1000)
        }

    })
} 