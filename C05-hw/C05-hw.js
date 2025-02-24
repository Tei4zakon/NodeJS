const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === '/address') {
        let data = ""
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            const parsedData = JSON.parse(data);
            const addressRegex = /^[a-zA-Z0-9.-/\s]+$/g;
            if (addressRegex.test(parsedData.address)) {
                res.end('Regex is good!');
            } else {
                res.end('Wrong address input');
            }
        });
    }
});

server.listen(6060, () => console.log('Server is running on port 6060...'));