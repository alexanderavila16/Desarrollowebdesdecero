
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


//VALIDACION DE EL FORMULARIO ----
var formulario = document.getElementById("formulario");

function validar(e){

    // obtengo el id nombre y el valor de ese campo 
    var inputnombre = document.getElementById("nombre"),
        inputemail = document.getElementById("email"),
        inputcoments = document.getElementById("comentarios"),
        alertsucces = document.getElementById("alertsucces"),
        alerterror = document.getElementById("alerterror");

        // vamos a obtener el valor cada input 
        if(inputnombre.value == 0 || inputemail.value ==0 || inputcoments.value ==0){
            // que no ejecute su funcion por defecto que lo hagaa vacio
            e.preventDefault();
            // alert("Datos vacios");
            // quitame la clase hide y muestrame la clase show 
            alerterror.classList.remove("hide");
            alerterror.classList.add("show");

            // luego de 2 segundos me quita la clase show y muestra la clase hide de css 
            setTimeout(function(){
                alerterror.classList.remove("show");
                alerterror.classList.add("hide");

            }, 2000);




        }else{
            e.preventDefault();
            // alert("Datos vacios");
            // quitame la clase hide y muestrame la clase show 
            alertsucces.classList.remove("hide");
            alertsucces.classList.add("show");

            // luego de 2 segundos me quita la clase show y muestra la clase hide de css 
            setTimeout(function(){
                alertsucces.classList.remove("show");
                alertsucces.classList.add("hide");

            }, 2000);

            // el valor de ese input lo va a vaciar cuando lo envie mis datos completos
            inputnombre.value ="";
            inputemail.value = "";
            inputcoments.value = "";
        }


}

//EVENTOS DEL FORMULARIO
// cuando haga click al evento submit va llamar a mi funcion validar 
formulario.addEventListener("submit", validar);





// BOTON DE SCROLL TOP PARA SUBIR 
var btntop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");





// DETECTAMOS SCROLL EN NUESTRA PAGINA WEB 
window.addEventListener("scroll", function(){
    // cuando digo document element estoy llamado a mi padre html a mi scrolltop
    // pego en mi consola document.documentElement.scrolltop; y mira la distancia 
    var scroll = document.documentElement.scrollTop,
    // alto completo y ancho completo de mi pantalla si lo veos en consola
        fullsize =  document.documentElement.offsetHeight,
        // mi viewport es lo que ve en pantalla y si peegamos 
        // desde  document.documentElement.clientHeight en consola vemos de mi pantalla 
        sizevp = document.documentElement.clientHeight;


    if(scroll > 100){
        // agregeme la clase show a mi boton y me lo muestra
        btntop.classList.add("show");
    }else{
        // si no esta en e inicio y menos de 100 quiteme de la vista el scroll
        btntop.classList.remove("show");
    }

    // MODIFICAR ELEMENTO CUANDO LLEGUE AL FINAL DE LA PAGINA
    // esto me eleva mi boton un poco arriba cuando llega al final 
    if(fullsize == (scroll + sizevp)){
        btntop.classList.add("scrollfinal");
    }else{
        btntop.classList.remove("scrollfinal");
    }

});


//DETECTAMOS EVENTO CLICK EN EL BOTON
btntop.addEventListener("click", function(){
    // scroll en eje x 0 y eje y 0 al inicio 
    window.scrollTo(0,0);



});

//DECTECTAR EVENTO CLICK EN EL LOGO
logo.addEventListener("click", function(){
    // scroll en eje x 0 y eje y 0 al inicio 
    window.scrollTo(0,0);



});
