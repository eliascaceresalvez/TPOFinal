import express from 'express';
import connection from '../src/database/connection.js';
import cors from 'cors';
import ruterUsuario from '../src/routes/usuarios.routes.js';
import 'dotenv/config';

const app = express();
app.use(cors());

const variable = process.env.VALOR_DATO;
console.log(`El valor de la variable de entorno es ${variable}`);
const PORT = process.env.PORT;

app.use('/usuarios', ruterUsuario);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
