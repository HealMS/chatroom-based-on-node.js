const http = require("http")
const url = require("url")

let server = http.createServer((req, res) => {
    let parse = url.parse(req.url, true)
    let query = parse.query
    console.log(query)
    //{ id: '123' }
}).listen(3000, "localhost")