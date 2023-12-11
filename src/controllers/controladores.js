const { MongoClient } = require('mongodb');
const connectDB = require('../db/connectDB')


// Ver las tareas ==================================
// Agregar una nueva tarea =========================
const createTask = async (req, res) => {
    const { title, description } = req.body;
    const task = {
        title,
        description,
        isCompleted: false
    };
    try {
        const db = await connectDB();


        const collection = db.collection('tasks');
        const result = await collection.insertOne(task);
        return res.json(result);
    } catch (err) {

        return res.status(500).json(err)

    }
}
// Actualizar una tarea existente ==================
// Eliminar una tarea ==============================



const CRUD = {
    createTask
}

module.exports = createTask; 