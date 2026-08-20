import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primera"
});

console.log("Conectado a MySQL con exito");

export default connection;
