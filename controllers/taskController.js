const taskModel = require('../models/taskModel');

const renderIndex = (req, res) => {
    res.render('index');
};

const getAlltasks = async (req, res) => {
    try{
        const results = await taskModel.getAlltasks();
        res.render('index', { tasks: results });
    } catch (err) {
        console.log(err);
    }
}

const getTaskId = async (req, res) => {
    try{
        const id = req.params.id;
        const results = await taskModel.getTaskId(id);
        res.status(200).json({ task: results });
    } catch (err) {
        console.log('erro ao tentar buscar tarefa', err);
        res.status(500).json({ error: 'erro ao tentar buscar tarefa'});
    }
}

const createTask = async (req, res) => {
    try{
        const task = req.body;
        const results = await taskModel.createTask(task);
        res.redirect('/');
    } catch (err) {
        console.log('erro ao tentar criar tarefa', err);
        res.status(500).json({ error: 'erro ao tentar criar tarefa'});
    }
}

const updateStatusTask = async (req, res) => {
    try{
        const { id } = req.params;
        const { status } = req.body;
        if (status !== 'pendente' && status !== 'concluida') {
            return res.status(400).send('Status inválido');
        }
        const results = await taskModel.updateStatusTask(id, { status });
        res.redirect('/');
    } catch (err) {
        console.log('erro ao tentar atualizar tarefa', err);
        res.status(500).json({ error: 'erro ao tentar atualizar tarefa'});
    }
}

const updateTask = async (req, res) => {
    try{
        const { id } = req.params;
        const { titulo, descricao, data_vencimento, prioridade, categoria } = req.body;
        const results = await taskModel.updateTask(id, { titulo, descricao, data_vencimento, prioridade, categoria });
        res.redirect('/');
    } catch (err) {
        console.log('erro ao tentar editar tarefa');
        res.status(500).json({ error: 'erro ao tentar editar tarefa'});
    }
}

const deleteTask = async (req, res) => {
    try{
        const id = req.params.id;
        const results = await taskModel.deleteTask(id);
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: 'erro ao tentar deletar tarefa'});
    }
}

module.exports = {
    renderIndex,
    getAlltasks,
    getTaskId,
    createTask,
    updateStatusTask,
    updateTask,
    deleteTask
}