const { Router } = require('express');
const createTask = require('../controllers/controladores');
const router = Router();


// Ver las tareas ==================================
router.get('/task', (req, res) => {
    res.send('Hola mundo')
})
// Agregar una nueva tarea =========================
router.post('/task', createTask)
// Actualizar una tarea existente ==================
// Eliminar una tarea ==============================


module.exports = router;