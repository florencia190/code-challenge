

const boton = document.getElementById("boton");

const apiURL = " https://jsonplaceholder.typicode.com/users"


boton.addEventListener("click", enviarInfo);

function enviarInfo (){

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;

    fetch (apiURL, {
        headers: {"Content-Type":"application/json:charset=utf-8"},
        method: "POST",
        body: JSON.stringify ({
            nombre: nombre,
            apellido: apellido,
            fecha: fecha,
        })
    })
    .then (response => response.json())
    .then(json => console.log(json))
}

