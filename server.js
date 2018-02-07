const http = require('http'); // modulo http nativo de NodeJS
const app = require('./app'); // llamado e inclusion de app.js

http.createServer(app).listen(3000);  // levantamos el servidor, 3000 port
console.log('Running on 3000');
