function imprimirImpares(numeroInicio) {
    let contador = 0;
    let numeroActual = numeroInicio

    while (contador < 50) {
        if (numeroActual % 2 !== 0) {
            console.log(numeroActual);
            contador++
        }
        
        numeroActual++;
    }
}

let numeroUsuario = parseInt(prompt("Ingrese el número:"));

if (!isNaN(numeroUsuario)) {
    imprimirImpares(numeroUsuario); 
} else {
    console.log("No es correcto. Introduzca un valor válido:");
}



//otra solucion no me da tiempo