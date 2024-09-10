const express = require('express');
const router = express.Router();
const tasksControllers = require('../controllers/taskController');

router.get('/index', tasksControllers.renderIndex);

router.get('/', tasksControllers.getAlltasks);
router.get('/:id', tasksControllers.getTaskId);
router.post('/', tasksControllers.createTask);
router.post('/tasks/atualizar/:id', tasksControllers.updateStatusTask);
router.post('/tasks/editar/:id', tasksControllers.updateTask);
router.post('/tasks/excluir/:id', tasksControllers.deleteTask);

module.exports = router;