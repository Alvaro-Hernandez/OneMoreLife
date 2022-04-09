document.addEventListener('mousemove', function (e) {
    let cuerpo = document.querySelector('body');
    let corazon = document.createElement('span');
    let MrtX = e.offsetX;
    let Mrty = e.offsetY;
    let tamaño =  Math.random () * 80;
    let trasformacion =  Math.random () * 360;

    corazon.style.left = MrtX+'px';
    corazon.style.top = Mrty+'px';
    corazon.style.width = 20 + tamaño+'px';
    corazon.style.height = 20 + tamaño+'px';
    corazon.style.transform = 'rotate('+ trasformacion +'deg)';
    cuerpo.appendChild(corazon);
    
    setTimeout(function(){
        corazon.remove();
    },1000);
})
