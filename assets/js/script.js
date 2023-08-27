
let interval;

function cambiarImagenAuto() {
    let imagen = document.getElementById('auto');
    if (imagen.src === "assets/img/auto.webp") {
        imagen.src = "assets/img/auto2.webp";
    } else {
        imagen.src = "assets/img/auto.webp";
    }
}

function cambiarImagen() {
    // Iniciar intermitencia
    interval = setInterval(cambiarImagenAuto, 500); // Cambia cada 0.5 segundos

    // Detener intermitencia después de 2 segundos
    setTimeout(function() {
        clearInterval(interval);
    }, 2000);
}


function cambiarFondo() {
    // Cambiar el fondo del div
    document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad3.jpg')";

    // Reproducir el sonido
    let sonido = document.getElementById('miSonido');
    sonido.play();
    cambiarImagen();
   
  
}
// Escuchar al botón derecho del mouse
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        cambiarFondo();
    }
});
