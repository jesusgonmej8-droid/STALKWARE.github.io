document.addEventListener("DOMContentLoaded", () => {
    const btnProductos = document.querySelector(".btn[href='../productos/productos.html']");
    if (btnProductos) {
        btnProductos.addEventListener("click", () => {
            console.log("Abriendo productos...");
        });
    }
});
