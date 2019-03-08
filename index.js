const server = require('./api/');

const port = 4440;
server.listen(port, () => console.log(`\nserver up on port: ${port}\n`));
