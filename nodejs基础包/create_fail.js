const http = require("http")
const url = require("url")
const fs = require("fs")

http.createServer((req, res) => {
    let dir = []
    fs.readdir("./album", (err, files) => {
        for(file of files) {
            fs.stat(`./album/${file}`, (err, stat) => {
                if(stat.isDirectory()) {
                    dir.push(file)
                }
                console.log(dir)
            })

        }
    })
}).listen(3000)
/* 循环+异步 这太扯了 */