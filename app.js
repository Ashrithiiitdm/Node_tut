const {createReadstream} = require('fs');

const stream=createReadstream('./content/first.txt')

stream.on('data',(result)=>{
    console.log(result)
})