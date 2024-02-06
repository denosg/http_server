const http = require('http');

const server = http.createServer((req, res) => reqListener(req, res))

const PORT = 3000;

function reqListener(req, res) {
    if (req.url === '/friends') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        })
        res.end(JSON.stringify({
            id: 0,
            name: 'Denis'
        }));
    }else if(req.url === '/messages'){
        res.write()
    }
}

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})