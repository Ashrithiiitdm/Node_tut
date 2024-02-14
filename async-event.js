const {readFile} = require('fs')
const { result } = require('lodash')
console.log('Started a task')

//Check file path
//As this is async first started and starting statements get printed
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})

console.log('Starting next task')