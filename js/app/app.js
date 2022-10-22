const formulario = document.getElementById('formulario');

const registro = document.getElementById('registro');

const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();
     
    await fetch('https://sheet.best/api/sheets/10ba4578-6a13-43b3-a988-4360473e213a',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value, 
            "Mensaje": formulario.mensaje.value

        })
    });

    registro.classList.remove('activo');
    exito.classList.add('activo');
});

