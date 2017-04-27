function desaparecerImagen(){
    
    var imagen=document.getElementById("carroMorado");
    imagen.style.display="none";
    removeEventListener("click", reproducirVideo);
    reproducirVideo();
}

function reproducirVideo(){
    var video = document.getElementById("videoMorado");
    video.src="https://www.youtube.com/embed/fLSmUWOYpKw?autoplay=1";
    video.style.display = "block";
    carroMorado.addEventListener("click", desaparecerImagen);
}
//+++++++++++++
function desaparecerImagen2(){
    var imagen=document.getElementById("imagenJune");
    imagen.style.display="none";
    removeEventListener("click", reproducirVideo2);
    reproducirVideo2();
}

function reproducirVideo2(){
    var video = document.getElementById("videoJune");
    video.src="https://www.youtube.com/embed/v8nyGzOLsdw?autoplay=1";
    video.style.display = "block";
    addEventListener("click", desaparecerImagen2);
}
//++++++++++++++++++
function desaparecerImagen3(){
    var imagen=document.getElementById("imagenGood");
    imagen.style.display="none";
    removeEventListener("click", reproducirVideo3);
    reproducirVideo3();
}

function reproducirVideo3(){
    var video = document.getElementById("videoGood");
    video.src="https://www.youtube.com/embed/xj2VWLV0xCU?autoplay=1"
    video.style.display = "block";
    
    addEventListener("click", desaparecerImagen3);
}

var imagen=document.getElementById("carroMorado");
var imagen2=document.getElementById("imagenJune");
var imagen3=document.getElementById("imagenGood");


imagen.addEventListener("click", desaparecerImagen);
imagen2.addEventListener("click", desaparecerImagen2);
imagen3.addEventListener("click", desaparecerImagen3);