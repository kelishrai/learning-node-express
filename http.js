const http = require('http');

const server = http.createServer(( req,res )=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage!');
    }
    if(req.url === '/about'){
        res.end('Welcome to our about page!');
    }
    if(req.url === '/contact'){
        res.end('Welcome to our contact page!');
    }
    res.end('Can\'t find your page');
});

server.listen(5000);