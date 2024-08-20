// Asegúrate de que estas funciones están correctamente definidas y exportadas

exports.getTareas = async (req, res) => {
    try {
        // Lógica para obtener las tareas
        res.status(200).json({ success: true, data: "Aquí irían las tareas" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.createTarea = async (req, res) => {
    try {
        // Lógica para crear una tarea
        res.status(201).json({ success: true, data: "Nueva tarea creada" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
