let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function (){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-100px';

    }
    ubicacionPrincipal = desplazamientoActual;
}