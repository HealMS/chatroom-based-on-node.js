const http = require("http")
const url = require("url")

let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain;charset=UTF-8"})
    let queryObj = url.parse(req.url, true).query
    let name = queryObj.name
    let age = queryObj.age
    let sex = queryObj.sex
    res.end(`${name}\n${age}\n${sex}`)
}).listen(3000)