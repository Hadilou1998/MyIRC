var http = require('http');
var port = 3000;
var httpServer = http.createServer(function (req, res) {
    res.end('hello world');
});
httpServer.listen(port, function () {
    console.log("Example app listening on port ".concat(port, "!"));
});
