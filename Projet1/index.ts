const http = require('http');
const port: number = 3000;

const httpServer = http.createServer(function(req, res) {
    res.end('hello world');
})

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})