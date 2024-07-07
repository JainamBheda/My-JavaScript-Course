const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text=text.replace("jainam","bheda");
console.log(text);

console.log("Creating new file");
fs.writeFileSync("bheda.txt",text);

