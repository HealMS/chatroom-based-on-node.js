const http = require("http")
const url = require("url")
const fs = require("fs")

let dir = []
http.createServer((req, res) => {
    if(/^.*ico$/.test(req.url)) return 
    fs.readdir("./album", (err, files) => {
        iterator(0, dir, files)
        console.log(dir)
    })
    res.end()
}).listen(3000)

function iterator(i, dir, files) {
    if(i === files.length) {
        return
    }
    fs.stat(`./album/${files[i]}`, (err, stat) => {
        if(stat.isDirectory()) {
            dir.push(files[i])
        }
        iterator(i+1, dir, files)
    })
}