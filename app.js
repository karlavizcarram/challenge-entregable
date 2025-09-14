// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea array de almacenamiento de amigos
let listaAmigos = []

// Funcion para agregar amigos 
function agregarAmigo() {
    // Agrega el valor de el id "amigo" a la variable inputValor
    let inputValor = document.getElementById("amigo")
    // Valida que no esté vacio y agrega a la lista
    if (inputValor.value !="") {
        listaAmigos.push(inputValor.value)
        // Limpia variable input después de agregar a lista
        inputValor.value = ""
        console.log(listaAmigos)
    } else {
        alert("Por favor ingresa un nombre")
    }
}

// Actualizar lista en HTML
function actualizarLista() {
    // Limpia lista actual
    let lista = document.getElementById("lista-amigos")
    lista.innerHTML = ""

    // Itera el array para llenar lia lista li
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li")
        li.textContent = listaAmigos[i]
        lista.appendChild(li)
    }

    // Muestra lista actualizada
    lista.innerHTML;
}

function sortearAmigo() {
    // Verifica que la lista tenga al menos 3 amigos
    if (listaAmigos.length < 3) {
        alert("Por favor ingresa al menos 3 nombres")
        return
    }
    // Genera un número aleatorio entre 0 y la longitud de la lista de amigos
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length)
    // Selecciona el amigo correspondiente al índice aleatorio
    let amigoSeleccionado = listaAmigos[indiceAleatorio]
    // Muestra el nombre del amigo seleccionado en el elemento con id "resultado"
    document.getElementById("resultado").innerText = "El amigo sorteado es: " + amigoSeleccionado
    document.getElementById("resultado").innerHTML;
}

function reiniciarLista() {
    // Limpia la lista de amigos
    listaAmigos = []
    // Limpia la lista en el HTML
    document.getElementById("lista-amigos").innerHTML = ""
    // Limpia el resultado del sorteo
    document.getElementById("resultado").innerText = ""
    alert("La lista ha sido reiniciada");
}   