const http = require("http")
const url = require("url")

http.createServer((req, res) => {
    let path = req.url
    res.writeHead(200, {"Content-type": "text/plain;charset=UTF-8"})
    if(path.substring(0, 9) === "/student/") {
        let id = path.substring(9)
        if(/^\d{10}$/.test(id)) {
            res.end("您要查询学生信息, id为"+id)
        } else {
            res.end("学生学号位数不对")
        }
    } else if(path.substring(0, 9) === "/teacher/") {
        let id = path.substring(9)
        if(/^\d{6}$/.test(id)) {
            res.end("您要查询学生信息, id为"+id)            
        } else {
            res.end("老师学号位数不对")            
        }
    } else {
        res.end("路径不对")
    }
}).listen(3000)