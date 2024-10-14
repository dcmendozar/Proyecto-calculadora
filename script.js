// Definir las constantes para la pantalla y los botones

// Selecciona el elemento con la clase "pantalla" y lo asigna a la constante 'pantalla'.
const pantalla = document.querySelector(".pantalla"); 

// Selecciona todos los elementos con la clase "boton" y los almacena en la constante 'botones'.
const botones = document.querySelectorAll(".boton");

// Establece un límite de caracteres para la pantalla
const limiteCaracteres = 11; 

// Repetir(Iterar) sobre cada botón en la colección 'botones'

 // Agrega un evento 'click' a cada botón
botones.forEach(boton => {
   
    boton.addEventListener("click", () => {
        // Obtiene el texto del botón presionado
        const botonOn = boton.textContent; 

        // Acción del botón limpiar

        if (boton.id === "limpiar") {
            // Reinicia el contenido de la pantalla a "0"
            pantalla.textContent = "0"; 
            // Sale de la función, evitando la ejecución del resto del código
            return; 
        }

        // Acción del botón borrar

        if (boton.id === "borrar") {

            // Comprueba si la pantalla tiene un solo carácter o muestra "¡Error!"
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                // Si es así, reinicia a "0"
                pantalla.textContent = "0"; 
            } else {
                // Elimina el último carácter de la pantalla
                pantalla.textContent = pantalla.textContent.slice(0, -1); 
            }
            // Sale de la función, evitando la ejecución del resto del código
            return; 
        }

        // Acción del botón igual

        if (boton.id === "igual") {
            try {
                // Verifica si la expresión contiene un divisor
                if (pantalla.textContent.includes('/')) {
                    // Muestra "¡Error!" si hay división
                    pantalla.textContent = "¡Error!"; 
                } else {
                    // Evalúa la expresión matemática mostrada en la pantalla
                    const resultado = eval(pantalla.textContent);
                    // Comprueba el límite de caracteres del resultado
                    if (resultado.toString().length > limiteCaracteres) {
                        // Muestra "¡Error!" si el resultado excede el límite
                        pantalla.textContent = "¡Error!"; 
                    } else {
                        // Muestra el resultado de la evaluación
                        pantalla.textContent = resultado; 
                    }
                }
            } catch {
                // Captura cualquier error durante la evaluación y muestra "¡Error!"
                pantalla.textContent = "¡Error!"; 
            }
            // Sale de la función
            return; 
        } 
        
        // Verifica si la longitud del texto en la pantalla excede el límite
        if (pantalla.textContent.length >= limiteCaracteres && boton.id !== "borrar") {
            // Si se ha alcanzado el límite, no se permite agregar más caracteres
            return;  
        }

        // Agrega números y operadores a la pantalla
        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            // Reemplaza el contenido de la pantalla si es "0" o "¡Error!"
            pantalla.textContent = botonOn; 
        } else {
            // Define un arreglo con los operadores matemáticos
            const operadores = ['+', '-', '*', '/']; 
            // Obtiene el último carácter del contenido actual de la pantalla
            const ultimoCaracter = pantalla.textContent.slice(-1); 

            // Evita la entrada de múltiples operadores consecutivos
            if (operadores.includes(ultimoCaracter) && operadores.includes(botonOn)) {
                // Si el último carácter y el nuevo son operadores, no se añade el nuevo
                return; 
            }

            // Añade el nuevo carácter a la pantalla
            // Concatenar el texto actual de la pantalla con el nuevo carácter del botón
            pantalla.textContent += botonOn; 
        }
    });
});