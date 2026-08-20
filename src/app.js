import express from 'express';
import cors from 'cors';
import connection from './database/connection.js';

const app = express();

const [rows] = await connection.query(
    "SELECT * FROM usuarios"
);

console.log(rows);

// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// });

// app.listen(3000, () => {
//     console.log('Servidor corriendo en http://localhost:3000');
// });
