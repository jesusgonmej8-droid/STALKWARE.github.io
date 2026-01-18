document.addEventListener("DOMContentLoaded", () => {

    const btnVolver = document.getElementById("btnVolver");

    // Cuando se presiona REGRESAR AL MENÚ
    btnVolver.addEventListener("click", (e) => {
        e.preventDefault();

        document.body.classList.remove("entrada");
        document.body.classList.add("salida");

        setTimeout(() => {
            window.location.href = btnVolver.href;
        }, 500);
    });

});
