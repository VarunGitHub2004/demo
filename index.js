import express from 'express'
const server=express()
server.get("/",(req,res)=>{
    res.send("./index.html")
})

server.listen(4000)
