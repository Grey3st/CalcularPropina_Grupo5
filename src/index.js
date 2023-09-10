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
    let tarjetaInput = document.getElementById("tarjetaInput");

    let labelTarjeta = document.getElementById("labelTarjeta");
    let paymentOption = document.getElementById("paymentOption");

    // Obtenemos ID de las tarjetas
    let tarjetaAmerican = document.getElementById("tarjetaAmerican");
    let tarjetaVisa = document.getElementById("tarjetaVisa");
    let tarjetaCabal = document.getElementById("tarjetaCabal");
    let tarjetaMastercard = document.getElementById("tarjetaMastercard");
    
    // Obtiene el valor seleccionado en el menú desplegable, si va a pagar en efectivo o con tarjeta
    let selectedOption = paymentOption.value;

    //Obtenemos la tarjeta con la que va a pagar
    let tarjetaOption = creditCardOption.value;

    // Oculta la información de la tarjeta y el campo de número de tarjeta por defecto
    cardInfo.style.display = "none";
    tarjetaInput.style.display = "none";

    if (selectedOption === "tarjeta") { //si paga con tarjeta
        // Muestra la información de la tarjeta
        labelTarjeta.style.display = "block";
        creditCardOption.style.display = "block";

        cardInfo.style.display = "block";
        tarjetaInput.style.display = "block";
        

        // Configura la información de la tarjeta seleccionada
        switch (tarjetaOption) {
            case "visa":
                habilitarTodasTarjetas();
                tarjetaAmerican.style.opacity = "0.5";
                tarjetaCabal.style.opacity = "0.5";
                tarjetaMastercard.style.opacity = "0.5";
                break;
            case "mastercard":
                habilitarTodasTarjetas();
                tarjetaAmerican.style.opacity = "0.5";
                tarjetaCabal.style.opacity = "0.5";
                tarjetaVisa.style.opacity = "0.5";
                break;
            case "amex":
                habilitarTodasTarjetas();
                tarjetaMastercard.style.opacity = "0.5";
                tarjetaCabal.style.opacity = "0.5";
                tarjetaVisa.style.opacity = "0.5";
                break;
            case "cabal":
                habilitarTodasTarjetas();
                tarjetaMastercard.style.opacity = "0.5";
                tarjetaAmerican.style.opacity = "0.5";
                tarjetaVisa.style.opacity = "0.5";
                break; 
        }
    }else{
        if (selectedOption == "efectivo"){
            labelTarjeta.style.display = "none";
            creditCardOption.style.display = "none";
        }
    }
}

function habilitarTodasTarjetas(){
    tarjetaAmerican.style.opacity = "1";
    tarjetaCabal.style.opacity = "1";
    tarjetaMastercard.style.opacity = "1";
    tarjetaVisa.style.opacity = "1";
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
