const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
require('./config/database');
var userCtrl = require('./controller/userController');
// const { Router } = require('express');
// import Router from "./route/route.js"
const Router = require("./route/route.js")
const port = 3030;
app.use(Router);

// app.get('/', (req, res) => res.send('Hello World!'));
// app.post('/add',userCtrl.createUser);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));