const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
require('./config');
var userCtrl = require('./controller/userController');
const port = 3030;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/add',userCtrl.addUser);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));