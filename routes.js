const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> EnterMessage</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> Send </button></form> </body>');
        res.write('</html>');
        return res.end();
    }

    else if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFile('message.txt', `${parsedBody.split('=')[1]}`, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> First Page</title><head>');
    res.write('<body><h1> Hello from node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     text: 'Just dummy text'
// };

exports.handler = requestHandler;
exports.text = 'just dummy text';
