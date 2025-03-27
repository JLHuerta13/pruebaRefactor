const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para el login
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// Ruta para el index
app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
