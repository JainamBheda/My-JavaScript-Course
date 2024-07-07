// console.log("hello");
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3009;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          :root{
              --dark-color:black;
          }
          .conatiner{
              display: flex;
              background-color: var(--dark-color);
              align-items: center;
              max-width: max-content;
  
          }
          .box{
              width:100px;
              height: 80px;
              --box-color1:violet;
              --box-color2:rgb(97, 9, 105);
              padding: 80px;
              margin:2px 200px;
              border:2px solid red;
              background-color: var(--box-color1);
              box-shadow: 10px 5px var(--box-color2);
          }
      </style>
  </head>
  <body>
      <div class="conatiner">
          <div class="box" id="box1"></div>
          <div class="box" id="box2"></div>
          <div class="box" id="box3"></div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
