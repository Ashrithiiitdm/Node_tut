const EventEmitter=require('events')

const customEmitter=new EventEmitter()
customEmitter.on('response',(name,id)=>{
    console.log(`data received name:${name} id:${id}`)
})

customEmitter.on('response',()=>{
    console.log(`Some other stuff`)
})
customEmitter.emit('response','Ashrith',34)