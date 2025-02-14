"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    var data = {
        products: [
            { name: "first" },
            { name: "second" },
            { name: "third" },
            { name: "fourth" },
        ]
    };
    res.end(JSON.stringify(data));
});
server.listen(9000, function () {
    console.log("Server is running on port 9000");
});
