function contarLetras (oracion, letra) {
    let contador = 0;


letra= letra.toLowerCase()

for (let i = 0; i < oracion.length; i++) {


    let caracter = oracion[i].toLowerCase();

    if (caracter === letra) {

        contador++;
    }
}

return contador; 


}


// let oracion = "El Athletic es una cuadrilla de maulas."
// let letraRepetida = "a";
// let resultado = contarLetra(oracion, letraRepetida)

//console.log('La letra "${letraRepetida}") se repite ${resultado} veces.');


//------------------------------------------------------------------------------------------//

//otra solución

//function contarLetra(oracion, letra) {

  //  letra = letra.toLowerCase();

    //let palabras = oracion.split("");


    //let contador = 0;

   // for (let i = 0; i < palabras.length; i++) {

     //   let palabra = palabras[i].toLowerCase();
        
       // for (let j = 0; j < palabra.length; j++) {
     //     if (palabra[j] === letra) {
     //     contador++;
    //      }
   //   }
   // }

    //    return contdor; 

    //    }

    //oraciones

    //let oracion = "El Athletic es una cuadrilla de maulas."
    //let letraRepetida = "e";
    //let resultado = contarLetra(oracion, letraRepetida);

        
    //console.log('La letra "${letraBuscada}" se repite ${resultado} veces en la oración');