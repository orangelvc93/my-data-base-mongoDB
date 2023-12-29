const { Router } = require('express');
const { viewAllTask, createTask, updateTask, deleteTask } = require('../controllers/tasks');
const router = Router();


// Ver las tareas ==================================
router.get('/task', viewAllTask)
// Agregar una nueva tarea =========================
router.post('/task', createTask)
// Actualizar una tarea existente ==================
router.put('/task/:id', updateTask)
// Eliminar una tarea ==============================
router.delete('/task/:id', deleteTask)

module.exports = router;