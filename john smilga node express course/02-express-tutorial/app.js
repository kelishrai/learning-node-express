console.log('Express Tutorial');
const http = require('http');
const {readFileSync} = require('fs')


const index = readFileSync('./navbar-app/index.html', 'utf-8')
const styles = readFileSync('./navbar-app/styles.css', 'utf-8')
const browser_app = readFileSync('./navbar-app/browser-app.js', 'utf-8')
const logo = readFileSync('./navbar-app/logo.svg', 'utf-8')

const server = http.createServer((request, response) => {
    console.log('User hit the server!');
    console.log(request.method)
    const url = request.url
    if(url == '/'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write(index)
        response.end()
    }
    else if(url == '/styles.css'){
        response.writeHead(200,{'content-type':'text/css'})
        response.write(styles)
        response.end()
    }
    else if(url == '/browser-app.js'){
        response.writeHead(200,{'content-type':'text/javascript'})
        response.write(browser_app)
        response.end()
    }
    else if(url == '/logo.svg'){
        response.writeHead(200,{'content-type':'image/svg+xml'})
        response.write(logo)
        response.end()
    }
    else if(url == '/about'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>Hello user!</h1><p>This is the about page</p>')
        response.end()
    }
    else {
        response.writeHead(404,{'content-type':'text/html'})
        response.write('<h1>Hello user!</h1><p>We didn\'t find your request</p>')
        response.end()
    }
})

server.listen(5000);