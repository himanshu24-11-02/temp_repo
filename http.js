const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('here is a short story')
    }
    res.end(`
    <h1> oops</h1>
    <p>we cant find the page u are looking for </p>
    <a href = "/">back home</a>`
    )
})


server.listen(8000)