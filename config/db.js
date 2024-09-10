const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'my_tasks'
});

connection.connect((err) => {
    if(err){
        console.log('Erro ao conectar o banco de dados', err);
    }
    console.log('conectado ao banco de dados');
});

module.exports = connection;
