// Importar Express (ES Modules)
import express from "express";

// Crear la aplicación
const app = express();

// Endpoint básico
app.get("/", (req, res) => {
  res.send("¡Hola nube!");
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
