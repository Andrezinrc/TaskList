const cron = require('node-cron');
const connection = require('./config/db');

cron.schedule('0 0 * * *', () => {
    const query = 'UPDATE tasks SET status = "concluida" WHERE data_vencimento <= CURDATE() AND status = "pendente"';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao atualizar o status das tarefas', err);
        } else {
            console.log('Status das tarefas atualizado', results);
        }
    });
});
