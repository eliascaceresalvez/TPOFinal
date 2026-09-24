let dataPrueba;
const btn = document.getElementById('btn');
const box = document.getElementById('box');

const peticionPrincipal = async() => {

    const response = await fetch('http://localhost:3000/usuarios');
    dataPrueba = await response.json();
    
    console.log(dataPrueba);
}

btn.addEventListener('click', () => {
    box.innerHTML = '';
    dataPrueba.forEach((usuario) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Nombre: ${usuario.nombre}</p>
        <p>Email: ${usuario.email}</p>
        <hr>
        `;
        box.appendChild(div);
    });
});

peticionPrincipal();
