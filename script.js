const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
}); 

typewriter
    /* .typeString('Bienvenidos  soy<span class="text-primary"> José Laiseca </span>') */
    .pauseFor(2500)
    .typeString('<strong> Bienvenidos </strong>')
    .pauseFor(300)
    .deleteChars(12)
    .typeString('Soy José Laiseca y este es mi')
    .typeString('<span style="color: #27ae60;"> CV</span> ')
    .pauseFor(1000)
    .start();


let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;  
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('menu').style.top = '0';
    }
    else{
        document.getElementById('menu').style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual; 
}