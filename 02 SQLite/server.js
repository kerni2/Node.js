const http = require('http');
const url = require('url');
const data = require('./sql3-data');

const requestHandler = async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

    if (path === '/users' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(await data.getUsers()));
    } else if (path === '/users' && method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            const parsedBody = new URLSearchParams(body);
            const name = parsedBody.get('name');
            const age = parsedBody.get('age');

            if (name && age) {
                const user = { name, age: parseInt(age) };
                const createUser = await data.addUser(user);
                res.writeHead(201);
                res.end(JSON.stringify(createUser));
            } else {
                res.writeHead(404);
                res.end(
                    JSON.stringify({ message: 'Name and age are required' })
                );
            }
        });
    } else if (path.startsWith('/users/') && method === 'GET') {
        const id = parseInt(req.url.split('/')[2]);
        const user = await data.getUserById(id);

        if (user) {
            res.writeHead(200);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    } else if (path.startsWith('/users/') && method === 'PUT') {
        const id = parseInt(req.url.split('/')[2]);
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            const parsedBody = new URLSearchParams(body);
            const updatedData = {};
            parsedBody.forEach((value, key) => {
                updatedData[key] = key === 'age' ? parseInt(value) : value;
            });

            const updatedUser = await data.updateUser(id, updatedData);

            if (updatedUser) {
                res.writeHead(200);
                res.end(JSON.stringify(updatedUser));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'User not found' }));
            }
        });
    } else if (path.startsWith('/users/') && method === 'DELETE') {
        const id = parseInt(req.url.split('/')[2]);
        const success = await data.deleteUser(id);

        if (success) {
            res.writeHead(204);
            res.end();
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
