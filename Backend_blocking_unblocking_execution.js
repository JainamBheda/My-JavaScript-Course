const fs=require("fs");
let text=fs.readFile("dele.txt","utf-8",(err,data)=>{console.log(err,data)});
console.log("this is message");
