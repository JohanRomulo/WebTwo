document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const botones = document.querySelectorAll("button");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const valor = boton.textContent;

            if (valor === "C") {
                display.value = "";
            } else if (valor === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += valor;
            }
        });
    });
});

