//packages
const express = require('express');
const cons = require('consolidate');
const path = require('path');
const pug = require('pug');

//imports
const inputRouter = require('./inputRouter');
const tableRouter = require('./tableRouter');

const app = express();
const port = 3000;
//app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});


app.use('/api/input', inputRouter);
app.use('/api/table', tableRouter);

app.listen(port, () => {
    console.log('app started on http://localhost:' + port);
})