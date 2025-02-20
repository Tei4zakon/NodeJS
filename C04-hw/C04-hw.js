const http = require('http');
const {sobiranje, odzemanje, mnozenje, delenje, kvadrat, modulo} = require("./calculator1");


const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/delenje') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
            const parsedData = JSON.parse(data);
           // console.log('parsed data', parsedData);
            const operationVal = delenje(parsedData.num1, parsedData.num2);
            //console.log(operationVal)
            res.writeHead (200, {'content-type': 'text/plain'});
            res.end(`${parsedData.num1} podeleno so ${parsedData.num2} e ednakvo na ${operationVal}`);
            } catch (err) {
                console.log(err);
                res.writeHead(400, { 'content-type': 'text/plain'});
                res.end('Invalid operation');
            };
        });
    } else if (req.method === 'POST' && req.url === '/mnozenje') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
            const parsedData = JSON.parse(data);
            const operationVal = mnozenje(parsedData.num1, parsedData.num2);
            res.writeHead (200, {'content-type': 'text/plain'});
            res.end(`${parsedData.num1} pomnozeno so ${parsedData.num2} e ednakvo na ${operationVal}`);
            } catch (err) {
                console.log(err);
                res.writeHead(400, { 'content-type': 'text/plain'});
                res.end('Invalid operation');
            };
        });
    } else if (req.method === 'POST' && req.url === '/sobiranje') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
            const parsedData = JSON.parse(data);
            const operationVal = sobiranje(parsedData.num1, parsedData.num2);
            res.writeHead (200, {'content-type': 'text/plain'});
            res.end(`${parsedData.num1} + ${parsedData.num2} = ${operationVal}`);
            } catch (err) {
                console.log(err);
                res.writeHead(400, { 'content-type': 'text/plain'});
                res.end('Invalid operation');
            };
        });
    } else if (req.method === 'POST' && req.url === '/odzemanje') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
            const parsedData = JSON.parse(data);
            const operationVal = odzemanje(parsedData.num1, parsedData.num2);
            res.writeHead (200, {'content-type': 'text/plain'});
            res.end(`${parsedData.num1} - ${parsedData.num2} = ${operationVal}`);
            } catch (err) {
                console.log(err);
                res.writeHead(400, { 'content-type': 'text/plain'});
                res.end('Invalid operation');
            };
        });
    } else if (req.method === 'POST' && req.url === '/modulo') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
            const parsedData = JSON.parse(data);
            const operationVal = modulo(parsedData.num1, parsedData.num2);
            res.writeHead (200, {'content-type': 'text/plain'});
            res.end(`${parsedData.num1} modulus ${parsedData.num2} e ednakvo na ${operationVal}`);
            } catch (err) {
                console.log(err);
                res.writeHead(400, { 'content-type': 'text/plain'});
                res.end('Invalid operation');
            };
        }); 
    } else if (req.method === 'POST' && req.url === '/kvadrat') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
            const parsedData = JSON.parse(data);
            const operationVal = kvadrat(parsedData.num);
            res.writeHead (200, {'content-type': 'text/plain'});
            res.end(`${parsedData.num} na kvadrat e ednakvo na ${operationVal}`);
            } catch (err) {
                console.log(err);
                res.writeHead(400, { 'content-type': 'text/plain'});
                res.end('Invalid operation');
            };
        });

    } else {
        res.end('I am lost');
    }
});

server.listen(6060, () => console.log('Server is running on port 6060'));