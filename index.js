const server = require('./api/server.js');

const dbPort = process.env.DB_PORT;

server.use(express.json());

const PORT = process.env.PORT || dbPort || 4000;

server.listen(PORT, () => {
    console.log(`!!! Server is listening on port ${PORT} !!!`)
})