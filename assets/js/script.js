let valorContador = 0;

function incrementarContador() {
    valorContador++; 
}


function animacion_auto() {
    const imagenauto = document.getElementById('auto');
    const imagenauto2 = document.getElementById('auto2');
    document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad3.jpg')";
    imagenauto.style.display = 'none';
    imagenauto2.style.display = 'block';

    setTimeout(function() {
        imagenauto.style.display = 'none';
        imagenauto2.style.display = 'block';
    }, 100);

    setTimeout(function() {
        imagenauto2.style.display = 'none';
        imagenauto.style.display = 'block';
    }, 400);

    setTimeout(function() {
        imagenauto.style.display = 'none';
        imagenauto2.style.display = 'block';
    }, 600);

    setTimeout(function() {
        imagenauto2.style.display = 'none';
        imagenauto.style.display = 'block';
    }, 800);

    setTimeout(function() {
        imagenauto.style.display = 'none';
        imagenauto2.style.display = 'block';
    }, 1000);

    setTimeout(function() {
        imagenauto2.style.display = 'none';
        imagenauto.style.display = 'block';
    }, 1200);

}

function cambiarFondo() {
    if (valorContador === 0) { 
        let sonido = document.getElementById('acelera');
        sonido.play();
        const ficha1 = document.getElementById('ficha_1');
        ficha1.style.display = 'none';
        setTimeout(function() {
            document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad4.jpg')";
            const ficha2 = document.getElementById('ficha_2');
            ficha2.style.display = 'block';
            let sonido2 = document.getElementById('frena');
            sonido2.play();
        }, 1200);
        incrementarContador();
    

    }

    else if (valorContador === 1) { 
        const ficha1 = document.getElementById('ficha_2');
        ficha1.style.display = 'none';
        let sonido = document.getElementById('acelera');
        sonido.play();
        setTimeout(function() {
            document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad6.jpg')";
            const ficha2 = document.getElementById('ficha_3');
            ficha2.style.display = 'block';
            let sonido2 = document.getElementById('frena');
            sonido2.play();
        }, 1200);
        incrementarContador();

    }

    else if (valorContador === 2) { 
        const ficha1 = document.getElementById('ficha_3');
        ficha1.style.display = 'none';
        let sonido = document.getElementById('acelera');
        sonido.play();
        setTimeout(function() {
            document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad8.jpg')";
            const ficha2 = document.getElementById('ficha_4');
            ficha2.style.display = 'block';
            let sonido2 = document.getElementById('frena');
            sonido2.play();
        }, 1200);
        incrementarContador();

    }

    else if  (valorContador === 3) { 
        const ficha1 = document.getElementById('ficha_4');
        ficha1.style.display = 'none';
        let sonido = document.getElementById('acelera');
        sonido.play();
        setTimeout(function() {
            document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad1.jpeg')";
            const ficha2 = document.getElementById('ficha_5');
            ficha2.style.display = 'block';
            let sonido2 = document.getElementById('frena');
            sonido2.play();
        }, 1200);
        incrementarContador();

    }

    else if (valorContador === 4) { 
        const ficha1 = document.getElementById('ficha_5');
        ficha1.style.display = 'none';
        let sonido = document.getElementById('acelera');
        sonido.play();
        setTimeout(function() {
            document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad4.jpg')";
            const ficha2 = document.getElementById('ficha_6');
            ficha2.style.display = 'block';
            let sonido2 = document.getElementById('frena');
            sonido2.play();
        }, 1200);
        incrementarContador();

    }

    else if (valorContador === 5) { 
        const ficha1 = document.getElementById('ficha_6');
        ficha1.style.display = 'none';
        let sonido = document.getElementById('acelera');
        sonido.play();
        setTimeout(function() {
            document.getElementById('carretera').style.backgroundImage = "url('/assets/img/cuidad6.jpg')";
            const ficha2 = document.getElementById('ficha_1');
            ficha2.style.display = 'block';
            let sonido2 = document.getElementById('frena');
            sonido2.play();
        }, 1200);
        valorContador = 0;

    }
}

function siguiente() {
    animacion_auto();
    cambiarFondo();
}

// Escuchar al botón derecho del mouse
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        animacion_auto();
        cambiarFondo();
    }
});

