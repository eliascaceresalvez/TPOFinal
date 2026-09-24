import connection from '../database/connection.js';

export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await connection.query(
            "SELECT * FROM usuarios"
        );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
}
