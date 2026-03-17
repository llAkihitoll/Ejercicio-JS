// SECCIÓN A
const habilidades = ["Base de datos", "Paginas web", "APIs", "Inteligencia Artificial", "Machine Learning", "Deep Learning", "Data Science", "Big Data", "Cloud Computing"];

// SECCIÓN B
const mostrarEtiquetas = (lista) => {

    const contenedor = document.querySelector("#etiquetas");

    contenedor.innerHTML = "";

    lista.forEach(habilidad => {

        const span = document.createElement("span");
        span.classList.add("etiqueta");
        span.textContent = habilidad;

        contenedor.appendChild(span);

    });
};

// SECCIÓN C
const construirPerfil = (datos) => {
    return {
        nombre: datos.name || "Sin nombre",
        usuario: "@" + datos.login,
        email: datos.email || "No disponible",
        ciudad: datos.location || "Sin ubicación",
        avatar: datos.avatar_url
    };
};

// SECCIÓN D
const renderizarPerfil = (perfil) => {

    document.querySelector("#nombre").textContent = perfil.nombre;
    document.querySelector("#usuario").textContent = perfil.usuario;
    document.querySelector("#email").textContent = perfil.email;
    document.querySelector("#ciudad").textContent = perfil.ciudad;

    document.querySelector("#avatar").src = perfil.avatar;
};

// SECCIÓN E
const cargarUsuario = async () => {

    const mensaje = document.querySelector("#mensaje");

    mensaje.textContent = "Cargando...";

    try {

        const res = await fetch("https://api.github.com/users");

        const data = await res.json();

        const perfil = construirPerfil(data[0]);

        renderizarPerfil(perfil);

        mostrarEtiquetas(habilidades);

        mensaje.textContent = "";

    } catch (error) {

        mensaje.textContent = "Error al cargar usuario";
        console.error(error);

    }
};

// SECCIÓN F
document.querySelector("#btn").addEventListener("click", cargarUsuario);