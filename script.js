window.addEventListener("load", () => {

    const inicio = document.querySelector(".inicio");

    setTimeout(() => {
        inicio.classList.add("ocultar");
    }, 3000);

    setTimeout(() => {
        window.location.href = "menu/menu.html";
    }, 4000);
});
