import express from 'express'
const server=express()
server.get("/",(req,res)=>{
    res.send("Hello 123")
})

server.listen(4000)
