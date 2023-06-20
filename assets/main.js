function lanzarDados() {
    // Generar un número aleatorio entre 1 y 6 para el dado 1
    let numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;

    // Establecer la imagen correspondiente al número aleatorio para el dado 1
    let imagenDado1 = document.getElementById("imagen-dado1");
    imagenDado1.src = "dado" + numeroAleatorio1 + ".jpg";

    // Generar un número aleatorio entre 1 y 6 para el dado 2
    let numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

    // Establecer la imagen correspondiente al número aleatorio para el dado 2
    let imagenDado2 = document.getElementById("imagen-dado2");
    imagenDado2.src = "dado" + numeroAleatorio2 + ".jpg";
}

function reproducir_sonido() {
    var audio_dado = document.getElementById("audio_dado");
    audio_dado.play();
}