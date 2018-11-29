const http = require("http")
const fs = require("fs")

let server = http.createServer((req, res) => {
    if(req.url === "/test") {
        fs.readFile("./test/01.html", (err, data) => {
            res.writeHead(200, {"Content-type": "text/html;charset=UFT-8"})
            res.write(data)
        })
    } else if(req.url === "/shebao.jpg") {
        fs.readFile("./test/shebao.jpg", (err, data) => {
            res.writeHead(200, {"Content-type": "text/jpg"})
            res.write(data)
        })
    } else if(req.url === "/aaaaa.css") {
        fs.readFile("./test/bbbbb.css", (err, data) => {
            res.writeHead(200, {"Content-type": "text/css"})
            res.end(data)
        })
    }
})

server.listen(3000, "127.0.0.1", () => console.log("running..."))
/* node.js没有web容器的概念
    路由路径与文件物理路径无关
*/