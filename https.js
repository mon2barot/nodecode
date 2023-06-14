const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to out Home page')
    }
    if (req.url === '/about'){
        res.end('Here is our short story')
    }
    res.end(`
        <h1>Oops! The page you are looking for does not exist</h1>
    `)
})

server.listen(5000)