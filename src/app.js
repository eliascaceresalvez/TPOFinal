import express from 'express';
import cors from 'cors';
import connection from './database/connection.js';

const app = express();
app.use(cors());

// const [rows] = await connection.query(
//     "SELECT * FROM usuarios"
// );

// console.log(rows);

app.get('/', async (req, res) => {
    const [rows] = await connection.query(
        "SELECT * FROM usuarios"
    );

    res.json(rows);
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
