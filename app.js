async function cargarUsuarios() {

    const estado = document.getElementById("estado");
    const contenedor = document.getElementById("contenedorUsuarios");

    // limpiar contenedor
    contenedor.innerHTML = "";

    estado.textContent = "Cargando...";

    try {

        const respuesta = await fetch("https://api.github.com/users");

        const usuarios = await respuesta.json();

        estado.textContent = "Usuarios cargados";

        console.log(usuarios);

        usuarios.forEach(usuario => {

            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            const img = document.createElement("img");
            img.src = usuario.avatar_url;

            const nombre = document.createElement("h2");
            nombre.textContent = usuario.login;

            tarjeta.appendChild(img);
            tarjeta.appendChild(nombre);

            contenedor.appendChild(tarjeta);

        });

    } catch (error) {

        estado.textContent = "Error al cargar usuarios";
        console.error(error);

    }
}