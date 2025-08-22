// Script básico para simular compras
document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".card .btn");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("¡Gracias por tu compra! Pronto te contactaremos por WhatsApp 😎");
        });
    });
});
