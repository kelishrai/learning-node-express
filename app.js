const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const ReadStream = fs.createReadStream('text.txt','utf-8');
    ReadStream.on('open',()=>{
        ReadStream.pipe(response);
    })
    ReadStream.on('error',()=>response.end(err));
})
server.listen(5000);