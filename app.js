const btnSumarEquipo1 = document.getElementById('sumarEquipo1');
const resultado1 = document.getElementById('resultado-equipo1');
const btnRestarGolEquipo1 = document.getElementById('restarEquipo1');
let title = document.getElementById('h1');

const SumarEquipo2 = document.getElementById('sumarEquipo2');
const resultado2 = document.getElementById('resultado-equipo2');
const btnRestarGolEquipo2 = document.getElementById('restarEquipo2');
const inputEquipo1 = document.getElementById("inputEquipo1");
const inputEquipo2 = document.getElementById("inputEquipo2");
let nombre1 = document.getElementById('nombre-equipo1')
const nombre2 = document.getElementById("nombre-equipo2");
const guardarBtn = document.getElementById('guardarBoton');
const terminarPartido = document.getElementById("terminarPartido");
const equipo1 = document.getElementsByClassName("uno")
const equipo2 = document.getElementsByClassName("equipo2");
let envolturaEquipos = document.getElementById('equipos-wraper');
let botonesName = document.getElementById("nombreEquipo");
let btnSuman = document.getElementsByClassName('sumar');
let otroPartido = document.getElementById('otroPartido');
let otro = document.getElementById('otro');
let relojContainer = document.getElementById('reloj');
let btnReloj = document.getElementById('iniciarDetenerBtn');
let reloj = document.getElementById('reloj'); // Agrega esta línea
let iniciarDetenerBtn = document.getElementById('iniciarDetenerBtn');
let tiempoActual = 0;
let tiempoCorriendo = false;
let intervalo;
let textTiempo = document.getElementById('textTiempo')

otro.addEventListener('click', function() {
    window.location.reload();
})

textTiempo.style.display = "none";
iniciarDetenerBtn.style.display = "none";
reloj.style.display = "none";

otroPartido.style.display ="none"


terminarPartido.addEventListener('click', quitarSumar)
function quitarSumar() {
  for (let i = 0; i < btnSuman.length; i++) {
    btnSuman[i].style.display = "none";
    otroPartido.style.display = "block"
    
  }
}
title.style.display = "none"
terminarPartido.style.display = "none"

guardarBtn.addEventListener('click', mostrarTerminar)
function mostrarTerminar(){
  terminarPartido.style.display = "block"
  title.style.display = "block"
  iniciarDetenerBtn.style.display = "block";
 reloj.style.display = "block";
 textTiempo.style.display = "block"
}

terminarPartido.addEventListener('click', quitarTerminar)
function quitarTerminar(){
  terminarPartido.style.display = "none"
}

botonesName.style.display = "block"
guardarBtn.addEventListener('click',ocultarBtn)

function ocultarBtn (){

  botonesName.style.display = "none"
}


envolturaEquipos.style.display = "none"
guardarBtn.addEventListener('click', mostrar);

function mostrar(){
  envolturaEquipos.style.display = "block"
}


guardarBtn.addEventListener('click', function() {
    const textoIngresado = inputEquipo1.value;
    nombre1.textContent = `${textoIngresado}`;
})
guardarBtn.addEventListener('click', function() {
    const textoIngresado = inputEquipo2.value;
    nombre2.textContent = `${textoIngresado}`;
})

let contador1 = 0;
btnSumarEquipo1.addEventListener('click', () => {
    contador1++;
    resultado1.textContent= contador1;
});

btnRestarGolEquipo1.addEventListener('click', () => {
    if(contador1 > 0){
        contador1--;
    } else {
        return;
    }
    resultado1.textContent = contador1;
})

let contador2 = 0;
SumarEquipo2.addEventListener('click', () => {
    contador2++;
    resultado2.textContent= contador2;
});

btnRestarGolEquipo2.addEventListener('click', () => {
    if(contador2 > 0){
        contador2--;
    } else {
        return;
    }
    resultado2.textContent = contador2;
});


terminarPartido.addEventListener('click', guardar)

function guardar(){
    if(contador1 > contador2){
        title.innerHTML = ` El resultado es: `
    }
    inputEquipo1.style.display = "none";
    inputEquipo2.style.display = "none";
    guardarBtn.style.display = "none";
    contador1.style.display = "none";
    contador2.style.display = "none";
    btnSumarEquipo1.style.display = "none";
    SumarEquipo2.style.display = "none";
    terminarPartido.style.display = "none"
}

guardarBtn.setAttribute('disabled', 'true')
inputEquipo1.addEventListener('input', habilitar)
inputEquipo2.addEventListener('input', habilitar)
function habilitar(){
    if(inputEquipo1.value && inputEquipo2.value){
        guardarBtn.removeAttribute('disabled', 'false')
    } 
}



function formatoDosDigitos(numero) {
    return numero < 10 ? `0${numero}` : numero;
  }

  function actualizarReloj() {
    const minutos = Math.floor(tiempoActual / 60);
    const segundos = tiempoActual % 60;
    const tiempoFormateado = `${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
    reloj.textContent = tiempoFormateado;
  }
  
  // Función para iniciar o detener el tiempo
  function iniciarDetenerTiempo() {
    if (tiempoCorriendo) {
      clearInterval(intervalo);
      iniciarDetenerBtn.textContent = 'Iniciar';
    } else {
      intervalo = setInterval(function() {
        tiempoActual++;
        actualizarReloj();
      }, 1000);
      iniciarDetenerBtn.textContent = 'Detener';
    }
    tiempoCorriendo = !tiempoCorriendo;
  }
  
  iniciarDetenerBtn.addEventListener('click', iniciarDetenerTiempo);

  terminarPartido.addEventListener('click', guardar);


// var ANCESTRY_FILE = JSON.stringify([
//     {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
//     {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
//     {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
//     {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
//     {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//     {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
//     {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
//     {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
//     {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
//     {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
//     {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
//     {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
//     {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
//     {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
//     {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
//     {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//     {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
//     {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
//     {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//     {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//     {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
//     {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
//     {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
//     {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
//     {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//     {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//     {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
//     {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//     {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//     {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//     {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
//     {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
//     {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//     {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
//     {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
//     {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//     {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
//     {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
//     {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
//   ])

//   var hasKnownMother = ancestry.filter(function(person) {
//     return person.mother in byName;
// }); 

// definit una funcin geenrar que me genere aletoriamente un frase se 15 caracteres que concatene en uno solo cumpluendo con el requerimiento de caracteres

// function generarContraseñaAleatoria(){
//   let contraseñaGenerada = ;
//   if( contraseñaGenerada.length === 15)return contraseñaGenerada;
//   else {
//     Math.random(a,b,c,d,f,g,h,i,j,k,m,n,x,y,z)
//   }

// }


// crear contador, definir una hora inicial, hora fianl, restar cuando dias, meses,semna y horas faltan para la fecha introducida, validar si fecha introducida, es menor uque la fecha acrual, 



// function aumentar (arr){
//   let aumentado = arr.map(num => num+2)
//   return aumentado
// }


// function generar(){
//   let generate1 = Math.floor(Math.random()*10)
//   let generate2 = Math.floor(Math.random()*10)
//   let generate3 = Math.floor(Math.random()*10)
//   let arr = [generate1,generate2,generate3]
//   let aumentado = aumentar(arr)
//   let filtrados = filtro(arr)
//   console.log(`original ${arr}`)
//   console.log(`copia sumandole ${aumentado}`)
//   console.log(`numero pares: ${filtrados}`)
// }
// function filtro(arr){
//   let filtrando = arr.filter(n => n % 2 === 0)
//   return filtrando
// }

// generar()

// function aplanar (){
//   let arr = [[1,2],[34,40],[12,2]];
//   let aplanado = arr.reduce((acomulador, actual) => acomulador.concat(actual), [])
//   return aplanado
// }
// console.log(aplanar())

// funcion, le paso un arr, y una funcion

// function filtrar(arr, fn){
//     // guardo aca
//     const filterArr = [];
//     // ciclo que recorre el arr y luego a cada valor llama a la funcion es par pasando la posicion i del arr
//     for(let i = 0; i < arr.length; i++){
//         // le paso la funcion es par la cual toma el numero como pasarlo
//         if(fn(arr[i], i)){
//             filterArr.push(arr[i]);
//         }
//     }
//     // retorno la caja con los elemetos
//     return filterArr;
// }

// const numeros = [1,2,3,4,5,6,7,8,9];

// function esPar(numero){
//     return numero % 2 === 0;
// }



// console.log(filtrar(numeros,esPar))

// defino funcion (le paso 3 parametro, arr,funcion y inicio)
// function reduceArray(nums,fn,init){
//     // si numero del array es igual a cero
//     if (nums.length === 0){
//         // devuelve inicio
//         return init
//     }
//     // asigni el valor de inicio a una direcion en memmoria llamada val
//     let val = init;
//     // recorro el arra nums siempre y cuando i sea menor que la longit
//     for(let i = 0; i < nums.length; i++){
//         // llamo a val, y le digo que le voy a pasar una funcion llamada fn que va a sumar los dos valores
//         val = fn(val, nums[i]);
//     }
//     // retorno val
//     return val;
// }

// defino funcion y le paso un parametro en x
// function componerFunciones(funciones){
//     // si no escribio nada retorna 3
//     if(funciones.length === 0){
//         return function(x){
//             return x;
//         }
//     }
//     // llamo a la primera funcion, duplicar y la almaceno
//     const primeraFuncion = funciones[0];
//     // recursividad llamando a la misma funcion pero con otro vinculos que se llama las funciones que faltan
//     const funcionesCompuesta = componerFunciones(funcionesRestantes);
    
//     // retorno la funcion x, con la vriables primerra fucnciones y le asignos las que hace falta
//     return function(x){
//         return primeraFuncion(funcionesCompuesta(x))
//     }
// };

// // definimos funciones que se pasan como parametros 
// function duplicar(x){
//     return x * 2;
// }

// function sumarCinco(x){
//     return x + 5;
// }
// function restarUno(x){
//     return x - 1;
// }

// // aca guardo los vinvulos de las funciones que le voy a pasar
// const funcionesParaComponer = [duplicar,sumarCinco,restarUno];
// // aca guardo compuesta , llamo a la funciones y adentro como argumento le paso el vinculo que contiene las funciones
// const funcionCompueta = componerFunciones(funcionesParaComponer);
// // defino otro espacion en memoria y lo llamos como resultado al cual le paso el vinvulo donde llamaba ala funcion principal y le paso como x 3
// const resultado = funcionCompueta(3);

// console.log(resultado)}}

// function argumentsLength(){
//     return argsArr.length;
// } 
// let argsArr = [{}, null, "3","ojopj",123];
// console.log(argumentsLength(...argsArr))