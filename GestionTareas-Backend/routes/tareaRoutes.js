const express = require('express');
const { getTareas, createTarea } = require('../controllers/tareaController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Verifica que getTareas y createTarea estén correctamente importados y definidos
router.route('/')
    .get(protect, getTareas)   // Asegúrate de que getTareas está correctamente importada y definida
    .post(protect, createTarea);  // Asegúrate de que createTarea está correctamente importada y definida

module.exports = router;
