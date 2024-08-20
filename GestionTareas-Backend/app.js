const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Cargar configuraciones del archivo .env
dotenv.config();

// Conectar a la base de datos MongoDB
connectDB();

const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const tareaRoutes = require('./routes/tareaRoutes');

// Usar rutas como middleware
app.use('/api/auth', authRoutes);
app.use('/api/tareas', tareaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
