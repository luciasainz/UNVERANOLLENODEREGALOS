const CONTRASENA = "EQUIPO";

// 👇 Cuando tengas tu vídeo, sustituye el enlace de abajo
const VIDEO = "https://www.youtube.com/watch?v=0qdDDFkheVw&list=RD0qdDDFkheVw&start_radio=1";

function comprobar(){

    const texto = document
        .getElementById("password")
        .value
        .trim()
        .toUpperCase();

    if(texto === CONTRASENA){

        document.getElementById("candado").innerHTML="🔓";

        document.getElementById("error").innerHTML="";

        document.getElementById("sorpresa").style.display="block";

        document.getElementById("video").src=VIDEO;

        confetti({
            particleCount:180,
            spread:90,
            origin:{y:0.6}
        });

    }else{

        document.getElementById("error").innerHTML="❌ Esa no es la contraseña. Reúne bien todas las letras ❤️";

    }

}
