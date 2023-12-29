const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const connectDB = require('../db/connection')


// Ver las tareas ==================================
const viewAllTask = async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection('tareas');
        const result = await collection.find();
        return res.json(await result.toArray());
    } catch (err) {
        return res.status(404).json(err)
    }
};

const createTask = async (req, res) => {
    const { title, description } = req.body;
    const task = {
        title,
        description,
        isCompleted: false
    };
    try {
        const db = await connectDB();
        const collection = db.collection('tareas');
        const result = await collection.insertOne(task);
        return res.json(result);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}


// Actualizar una tarea existente ==================
const updateTask = async (req, res) => {
    const id = req.params.id;
    const { title, description, isCompleted } = req.body;
    const task = {
        title,
        description,
        isCompleted
    };
    try {
        const db = await connectDB();
        const collection = db.collection('tareas');
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...task } })
        return res.json(result);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err.message);
    }
}

// Eliminar una tarea ==============================
const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        const db = await connectDB();
        const collection = db.collection('tareas');
        const result = await collection.deleteOne({ _id: new ObjectId(id) })
        return res.json(result);
    } catch (err) {
        console.log(err)
        return res.status(404).json(err.message);
    }
}



const CRUD = {
    viewAllTask,
    createTask,
    updateTask,
    deleteTask
}

module.exports = CRUD; 