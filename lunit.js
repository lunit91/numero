const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

function verificarNumero() {
    const input = document.getElementById("number-1-100").value;
    const numeroUsuario = parseInt(input, 10);
    const mensaje = document.getElementById("mensaje");



    intentos++;
    if (numeroUsuario === numeroSecreto) {
    mensaje.textContent = `¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`;
    } else if (numeroUsuario < numeroSecreto) {
    mensaje.textContent = "Demasiado bajo. ¡Intenta de nuevo!";
    } else {
    mensaje.textContent = "Demasiado alto. ¡Intenta de nuevo!";
    }
}