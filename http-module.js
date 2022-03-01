const http = require("http");

const server = http.createServer((req, res) =>{
    // req = serverga so'rov
    // res = serverdan javob
    res.write("<h1>Hello world Nodejs</h1>");
    res.end()
});

server.listen(5000, () => {
    console.log("Server has been started on port 5000...");
});

