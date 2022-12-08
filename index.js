const express = require("express");
const path = require("path");
const server = express();

//handles
const handleAbout = (req, res) => {
    res.send("response from about server ")
}
const handleContact = (req,res)=>{
    res.send("response from contact server")
}
const handleService = (req,res)=>{
    res.send("response from service server")
}
const handleHome = (req,res)=>{
    res.send("response from home server")
}
const handleError = (req,res)=>{
    res.send("404 not found")
}

//middlewares
const about = (req,res,next) =>{
    console.log("about executed")
    next();
}
const contact = (req,res,next) =>{
    console.log("contact executed")
    next();
}
const service = (req,res,next) =>{
    console.log("service executed")
    next();
}
const home = (req,res,next) =>{
    console.log("home executed")
    next();
}






server.use(express.static(path.join(__dirname,"public")))

server.get("/about",about, handleAbout);
server.get("/contact",contact,handleContact);
server.get("/service",service,handleService);
server.get("/",home,handleHome);
server.get("*", handleError)
server.listen(3001, "localhost",()=>{console.log("server is active")})