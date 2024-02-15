const {readFile}=require('fs');
const { result } = require('lodash');


const getText=(path) =>{
    return new Promise((resolve,reject)=>{
        readFile('./content/first.txt','utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
        
            }
        })


    })
}


const start =async()=>{
    try{
        const first=await getText('./content/fi.txt');
        console.log(first)
    }catch(err){
        console.log(err)
    }
}

start()
/* getText('./content/first.txt').then(result=>console.log(result)).catch(err=>console.log(err)) */