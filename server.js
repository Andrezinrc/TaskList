const express = require('express');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 3000;

require('./cronJobs');
const taskRoute = require('./routes/taskRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayout);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', taskRoute);

app.listen(port, (err) => {
    if(err) {
        console.log('erro ao rodar o servidor', err);
        return;
    }
    console.log('servidor rodando na porta', port);
});
