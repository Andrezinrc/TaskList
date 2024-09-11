const db = require('../config/db');

const getAlltasks = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM tasks";
        db.query(sql, (err, results) => {
            if(err) reject(err);
            else resolve(results);
        });
    });
};

const getTaskId = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM tasks WHERE id = ?";
        db.query(sql, [id], (err, results) => {
            if(err) reject(err);
            if (!results || results.length === 0) return reject('Tarefa não encontrada');
            else resolve(results[0]);
        });
    });
};

const createTask = (task) => {
    return new Promise((resolve, reject) => {
        const { titulo, descricao, data_vencimento, prioridade, categoria } = task;
        const sql = 'INSERT INTO tasks (titulo, descricao, data_vencimento, prioridade, categoria) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [titulo, descricao, data_vencimento, prioridade, categoria], (err, results) => {
            if(err) reject(err);
            else resolve(results);
        });
    });
};

const updateStatusTask = (id, { status }) => {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE tasks SET status = ? WHERE id = ?';
        db.query(sql, [status, id], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

const updateTask = (id, task ) => {
    return new Promise((resolve, reject) => {
        const { titulo, descricao, data_vencimento, prioridade, categoria } = task;
        const sql = 'UPDATE tasks SET titulo = ?, descricao = ?, data_vencimento = ?, prioridade = ?, categoria = ? WHERE id = ?';
        db.query(sql, [titulo, descricao, data_vencimento, prioridade, categoria, id], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM tasks WHERE id = ?';
        db.query(sql, [id], (err, results) => {
            if(err) reject(err);
            else resolve(results) 
        });
    });
};

module.exports = {
    getAlltasks,
    getTaskId,
    createTask,
    updateTask,
    updateStatusTask,
    deleteTask
};