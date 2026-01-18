console.log("Opiniones cargado correctamente.");

document.querySelector(".btn-volver").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(".card").classList.add("salida");

    setTimeout(() => {
        window.location.href = "../menu/menu.html";
    }, 600);
});
