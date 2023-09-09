console.log("hola");

function calcularPropina(){
    let costoComida = document.getElementById("inputCosto").value;
    let costoPropina = document.getElementById("inputPropina").value;

    let propina = costoComida * costoPropina / 100;
    document.getElementById("resPropina").value = propina;

    let totalComida = parseInt(costoComida) + parseInt(propina);
    document.getElementById("resTotal").value = totalComida;
}