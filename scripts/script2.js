let divs = document.querySelectorAll("div.slide");
let ultimapos=(divs.length-1)*divs[0].offsetWidth;
let parada = false;
let tempo = 0;

divs.forEach((x,i)=>{
    x.style.left=(x.offsetWidth*i)+"px";
})
function Sliding(){
    divs.forEach((x,i)=>{
        if(parada == false){
            x.style.left=(x.offsetLeft-10)+"px";
            if(x.offsetLeft <= (-1*x.offsetWidth)){
                x.style.left=ultimapos+"px";
                parada=true;
            }
        }else{
            if(x.offsetLeft%x.offsetWidth != 0){
                x.style.left=(x.offsetLeft-10)+"px";
            }
        }
    })
    if(parada){
        tempo++;
        if(tempo>300){
            tempo=0;
            parada=false;
        }
    }
    requestAnimationFrame(Sliding)
}
function ShowMenu(){
    let menurapido = document.querySelector("header ul:nth-of-type(2)");
    if(menurapido!= null){
        if(menurapido.style.display == "none"){
            menurapido.style.display = "block";
        }else{
            menurapido.style.display = "none";
        }
    }else{
        alert("Não achei o menu")
    }
}
let btnmenu = document.querySelector("header button");
btnmenu.addEventListener('click',ShowMenu);
Sliding();