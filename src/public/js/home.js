console.log("entro")




const carrusel = document.querySelector(".carrusel-items");
let maxscrollLeft = carrusel.scrollWidth-carrusel.clientWidth
let intervalo = null;
let step = 112;
const start= ()=>{
    intervalo = setInterval(function(params){
        carrusel.scrollLeft = carrusel.scrollLeft + step
        if(carrusel.scrollLeft === maxscrollLeft){
            step = -4
        }else if(carrusel.scrollLeft===0){
            step = step *-1;
        }
    },100)

};


const stop= ()=>{
    clearInterval(intervalo)
};
carrusel.addEventListener("mouseover", ()=>{
    stop()
})

carrusel.addEventListener("mouseout",()=>{
    start()
})

start();