const express = require('express');
const app = express();
const dotenv = require('dotenv');


//============CONFIGURACIONES ==============================
dotenv.config();
const PORT = process.env.PORT || 5000;
app.set('PORT', PORT);


//============CREAR RUTAS  =================================
const indexRoutes = require('./routes/index');


//============AGREGAMOS RUTAS A EXPRESS  ===================
app.use(express.json());
app.use('/', indexRoutes);


//============EXPORTAR MODULOS =============================
module.exports = app;