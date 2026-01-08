document.getElementById("year").textContent = new Date().getFullYear();

const imagenes = [
    "./assets/images/burguer.avif",
    "./assets/images/salchipapa.jpg"
];

const currentimg = document.getElementById("currentimg");
const nextimg = document.getElementById("nextimg");
let indiceActual = 0;

function cambiarImagen() {
    const siguienteIndice = (indiceActual + 1) % imagenes.length;
    
    nextimg.style.backgroundImage = `url('${imagenes[siguienteIndice]}')`;
    
    currentimg.classList.add("salida");
    nextimg.classList.add("entrada");
    
    setTimeout(() => {
        currentimg.style.backgroundImage = `url('${imagenes[siguienteIndice]}')`;
        currentimg.classList.remove("salida");
        nextimg.classList.remove("entrada");
        
        indiceActual = siguienteIndice;
    }, 1000);
}

currentimg.style.backgroundImage = `url('${imagenes[0]}')`;

setInterval(cambiarImagen, 4000);

const overlay = document.getElementById("overlay");
const btnMenu = document.getElementById("btn_menu");
const menuPrincipal = document.getElementById("menuprincipal");

btnMenu.addEventListener("click", abrirMenu);
overlay.addEventListener("click", cerrarMenu);

document.querySelectorAll("#menuprincipal a").forEach(link => {
    link.addEventListener("click", cerrarMenu);
});

function abrirMenu() {
    overlay.style.display = "block";
    menuPrincipal.style.display = "flex";
    menuPrincipal.classList.add("abriendo");
    
    setTimeout(() => {
        menuPrincipal.classList.remove("abriendo");
    }, 400);
}

function cerrarMenu() {
    menuPrincipal.classList.add("cerrando");
    
    setTimeout(() => {
        overlay.style.display = "none";
        menuPrincipal.style.display = "none";
        menuPrincipal.classList.remove("cerrando");
    }, 400);
}