console.log("hola");

function calcularPropina(){
    let costoComida = document.getElementById("inputCosto").value;
    let costoPropina = document.getElementById("inputPropina").value;

    let propina = costoComida * costoPropina / 100;
    document.getElementById("resPropina").value = propina;

    let totalComida = parseInt(costoComida) + parseInt(propina);
    document.getElementById("resTotal").value = totalComida;
}

function showCardInfo() {
    // Obtiene referencias a elementos HTML por su ID
    let creditCardOption = document.getElementById("creditCardOption");
    let cardInfo = document.getElementById("cardInfo");
    let cardName = document.getElementById("cardName");
    let cardImage = document.getElementById("cardImage");
    let inputTarjeta = document.getElementById("inputTarjeta");

    let labelTarjeta = document.getElementById("labelTarjeta");
    let paymentOption = document.getElementById("paymentOption"); 

    // Obtiene el valor seleccionado en el menú desplegable
    let selectedOption = creditCardOption.value; // Obtener la opción seleccionada en el primer menú desplegable
    // Oculta la información de la tarjeta y el campo de número de tarjeta por defecto
    cardInfo.style.display = "none";
    inputTarjeta.style.display = "block";

    if (selectedOption === "tarjeta") {
        // Muestra la información de la tarjeta
        cardInfo.style.display = "block";
        labelTarjeta.style.display = "block";
        paymentOption.style.display = "block";

        // Configura la información de la tarjeta seleccionada
        switch (selectedOption) {
            case "visa":
                cardName.textContent = "Visa";
                cardImage.src = "./img/tarjetas.png"; // Reemplaza con la ruta de la imagen de Visa
                break;
            case "mastercard":
                cardName.textContent = "Mastercard";
                cardImage.src = "./img/tarjetas.png" // Reemplaza con la ruta de la imagen de Mastercard

                break;
            case "amex":
                cardName.textContent = "American Express";
                cardImage.src = "./img/tarjetas.png"; // Reemplaza con la ruta de la imagen de American Express
                break;
        }

        // Muestra el campo para el número de tarjeta
        inputTarjeta.style.display = "none";
    }else{
        if (selectedOption == "efectivo"){
            labelTarjeta.style.display = "none";
            paymentOption.style.display = "none";
        }
    }
}
window.onload = function () {
    showCardInfo(); // Llama a la función para configurar el estado inicial
};

console.log("pagina fachera hecha con ganas y que todo el equipo trabajo epicamente GG");

// Ventana modal
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// la wea tenia que haberla hecho con css pero como me colgue la hice con java, ke paso las pinches imagenes no cargan
//cuestion master matias deberas hacer lo siguiente estas son tus misiones diarias :
// 1- imagen de fondo fachera que resalte la pagina de preferencia nivel blue label
//2 - no mencionar que la cague con las imagenes(sabre si hiciste de boton deaa)
//3 - cualquiera que haya leido esto y haga el marge elimine todo rastro de informacion al respecto
//4 - profe si usted llega a descargar esta version decirle que todo funciona menos la imagenes y no se el motivo
//5-  volviendo a tus misiones mati :
//6- ponle color a las letras xd
//7- si queres ponele un boton que diga pagar y que cuando pase por encima resalte en negrito o algo asi xd
//8- prepara un buen te porque el te tranquiliza el alma 
// y eso es todo recompensa : aprobamos el domingo(bonus extra de 1 un chicle si no mencionas la mision 2)