const Tarea = require('../models/Tarea'); // Asegúrate de que el modelo esté correctamente importado

// Función para obtener todas las tareas
exports.getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find(); // Obtener todas las tareas
        console.log('Tareas encontradas:', tareas);  // Depuración
        res.status(200).json(tareas);
    } catch (error) {
        console.error('Error al obtener tareas:', error.message);
        res.status(500).json({ message: 'Error al obtener tareas' });
    }
};

// Función para crear una nueva tarea
exports.createTarea = async (req, res) => {
    try {
        const tarea = new Tarea(req.body); // Crear una nueva tarea con los datos recibidos
        await tarea.save(); // Guardar la tarea en la base de datos
        res.status(201).json(tarea);
    } catch (error) {
        console.error('Error al crear tarea:', error.message);
        res.status(500).json({ message: 'Error al crear tarea' });
    }
};
