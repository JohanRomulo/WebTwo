document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector("#display");
    const botones = document.querySelectorAll("button");

    botones.forEach((boton) => {
        boton.addEventListener("click", manejarClick);
    });

    function manejarClick(evento) {
        const valor = evento.target.textContent;

        switch (valor) {
            case "C":
                display.value = "";
                break;
            case "=":
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = "Error";
                }
                break;
            default:
                display.value += valor;
        }
    
});
