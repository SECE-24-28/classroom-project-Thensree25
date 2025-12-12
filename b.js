const http=require('http');

const server=http.createServer((req,res)=>{
    //set the content type to html
    res.writeHead(200,{'content-type':'text/html'});

    //Write your html condent
    res.write('<h1>Hello World</h1>');
    res.write('<p>This is Html content served from Node.js</p>');
    res.end();
});

server.listen(12030, ()=>{
    console.log('Server is running at http://localhost:12030/');
});