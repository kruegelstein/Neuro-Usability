const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const cors = require('cors');

const app = express();

//App
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb', type: '*/*' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
router(app);

//server
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on ', port);
