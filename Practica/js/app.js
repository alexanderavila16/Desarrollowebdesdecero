
//MENU RESPONSIVE
var btnmenuopen = document.getElementById("btnmenuopen");
    btnmenuclose = document.getElementById("btnmenuclose");
    menuresponsive = document.getElementById("menubar");
    enlaces = document.getElementById("enlaces");

    //CLICK EN ABRIR
    // va dectectar un evento click y va llamar mi funcion 
    btnmenuopen.addEventListener("click", function(){
        // pude aver agregado .classname = "active" pero esta es otra forma 
        menuresponsive.classList.add("active");
    });

    //Click Cerrar
    btnmenuclose.addEventListener("click", function(){
        // pude aver agregado .classname = "active" pero esta es otra forma 
        //me remueve el estado anterior
        menuresponsive.classList.remove("active");
    });

    //Cerrar menu con elementos de enlace cuando le doy clik a n enlace del menu se cierra
    enlaces.addEventListener("click", function(){
        // le estoy aplicando estilo una trancion de 0.5 s 
        menuresponsive.style.transitionDelay = "0.5s";

        menuresponsive.classList.remove("active");

    });


// SLIDER DE PRODUCTOS 
// con querySelector me va permitir acceder a una clase a un id 
//con . la seleccion .slider
var contenedor = document.querySelector(".slider"),
    btnizquierdo = document.getElementById("btn-izquierda"),
    btnderecha = document.getElementById("btn-derecha");

    // EVENTO PARA EL BOTON DERECHO 
    btnderecha.addEventListener("click", function(){
        // el scroll de la izquierdaa va ser += del tamaño total de mi elemento
        // desde la pocision en el que estas mas el tamaño total 
        // el scrollleft por defecto es 0 cuando voy haciendo scroll aumenta 100  o 1000
        // y offssetwidth es e tamaño total de ese contenedor supongaos que  sea 1000px entonces el valor del scrollleft es de 100px
        // con este operador de 1000 aumente otros 1000   
        contenedor.scrollLeft += contenedor.offsetWidth;

});

    // EVENTO PARA EL BOTON IZQUIERDO
    btnizquierdo.addEventListener("click", function(){
        // el scroll de la izquierdaa va ser += del tamaño total de mi elemento
        // desde la pocision en el que estas menos el tamaño total 
        contenedor.scrollLeft -= contenedor.offsetWidth;

});
