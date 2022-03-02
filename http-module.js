const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    if (req.method === "GET"){
        if (req.url === '/'){
            fs.readFile(path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                if (err) throw  err;
                res.end(content);
            })
        }else if (req.url === '/content'){
            fs.readFile(path.join(__dirname, 'views', 'Content.html'),
                'utf-8',
                (err, content) => {
                    if (err) throw  err;
                    res.end(content);
                })
        } else if(req.url === "/api/cars"){
            res.writeHead(200, {"Content-type": "text/json"})
            const cars = [
                {name: 'BMW',color: 'Black'},
                {name: 'Mers',color: 'Blue'}
            ]
            res.end(JSON.stringify(cars))
        }
    }else if (req.method === "POST"){
        const body = []
        res.writeHead(200, {"Content-type": "text/html"})
        req.on("data", data => {
            body.push(Buffer.from(data).toString());
        })
        req.on("end", () => {
            const message = body.toString().split("=")[1]
            res.end(`<span>Your Message:<b>${message}</b></span>`)
        });

    }

});

server.listen(5000, () => {
    console.log("Server has been started on port 5000...");
});

