const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")

let server = http.createServer((req, res) => {
    /* 路径部分不含query */
    let pathname = url.parse(req.url).pathname
    let extname = path.extname(pathname)
    if(pathname === "/")
        pathname = "/index.html"
    fs.readFile(`./static${pathname}`, (err, data) => {
        if(err) {
            //如果此文件不存在
            fs.readFile("./static/404.html", (err, data) => {
                res.writeHead(404, {"Content-type": "text/html;charset=utf8"})
                res.end(data)
            })
        } else {
            // MIME类型
            //网页 text/html
            //图片 image/jpg
            let mime = getMIME(extname)
            res.writeHead(200, {"Content-type": mime})
            res.end(data)
        }
    })
}).listen(3000, "localhost")

function getMIME(extname) {
    switch(extname) {
        case ".html":
            return "text/html"
        case ".jpg":
            return "image/jpg"
        case ".css":
            return "text/css"
    }
}