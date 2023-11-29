//Estructuras de control
//Condicionales y ciclos
//while, do while, for

             // indice ; condicionales; incremento o decremento; 

/*            
for (let index=1; index < 6; index++) {
    if(index==3) {
      continue;  
}
    debugger;
}
*/

//Funciones
//function saludar(){console.log("Hola mundo");}

/*
function limpiar() {
    document.getElementById('formulario').reset();
    
}

function suma() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x + y ;
}
function resta() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x - y ;
}
function multiplicacion() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x * y ;
}
function division() {
    let x = parseInt(document.getElementById('numero1').value);
    let y = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = x / y ;
}
*/

//Funcion que maneja el evento click
//?=operador ternario
//let boton = document.querySelector(".boton");
//eventos del mouse
                                   //Eventio que va a escuchar, funcion que se va a ejecutar
/*
boton.addEventListener("click", function(){
    console.log("Diste clic en el boton");
    boton.classList.toggle("verde");
})
*/
/*boton.addEventListener("mouseout", function(){
    document.write("Estamos fuera del boton");
    boton.classList.toggle("verde");
})

window.addEventListener("keydown", (e) =>{
    document.write("pulso una tecla");
    document.write(String.fromCharCode(e.keyCode))
} )


window.addEventListener("keypress", (e) =>{
    document.write("pulso una tecla");
    document.write(String.fromCharCode(e.keyCode))
} )

window.addEventListener("keyup", (e) =>{
    document.write("pulso una tecla");
    document.write(String.fromCharCode(e.keyCode))
} ) 
*/
let pantalla = document.querySelector(".pantalla");
const btn = document.querySelectorAll(".botones");

btn.forEach(boton => {
    boton.addEventListener("click" , () => {

       const BotonApretado = boton.textContent; 

       if (boton.id === "AC"){
          pantalla.textContent = "0"
          return;
         }
     
       if (boton.id === "C"){
          if(pantalla.textContent.length === 1 || pantalla.textContent === "Sintax Error"){
               pantalla.textContent = "0";
          }else{
               pantalla.textContent = pantalla.textContent.slice (0, -1);
          }
          return;
       }

       if (boton.id === "igual"){
          try {
               pantalla.textContent = eval(pantalla.textContent);//Eval sirve para evaluar un conjunto den string que tengan caracteristicas matematicas
          } catch {
               pantalla.textContent = "Sintax Error"
          }
         
          return;
     }
       if (pantalla.textContent === "0" || pantalla.textContent === "Sintax Error") {
            pantalla.textContent = BotonApretado;
       }else{
            pantalla.textContent += BotonApretado;
       }
       
      
    })
}) 