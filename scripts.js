document.getElementById("convertButton").addEventListener("click", function() {
    var number = document.getElementById("numberInput").value;
    var result = document.getElementById("result");

    if (number !== "") {
        var words = convertNumberToWords(number);
        result.innerHTML = "En palabras: " + words;
    } else {
        result.innerHTML = "Por favor ingresa un número válido.";
    }
});

function convertNumberToWords(number) {
    var singleDigits = [
        "", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"
    ];

    var tenToNineteen = [
        "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"
    ];

    var tens = [
        "", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"
    ];

    var hundreds = [
        "", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"
    ];

    var thousands = [
        "", "mil", "dos mil", "tres mil", "cuatro mil", "cinco mil", "seis mil", "siete mil", "ocho mil", "nueve mil"
    ];

    var words = "";

    if (number === "0") {
        words = "cero";
    } else if (number < 0 || isNaN(number)) {
        words = "Número inválido";
    } else if (number < 10) {
        words = singleDigits[number];
    } else if (number < 20) {
        words = tenToNineteen[number - 10];
    } else if (number < 100) {
        var ten = Math.floor(number / 10);
        var remainder = number % 10;
        words = tens[ten];
        if (remainder > 0) {
            words += " y " + singleDigits[remainder];
        }
    } else if (number < 1000) {
        var hundred = Math.floor(number / 100);
        var remainder = number % 100;
        words = hundreds[hundred];
        if (remainder > 0) {
            words += " " + convertNumberToWords(remainder);
        }
    } else if (number < 1000000) {
        var thousand = Math.floor(number / 1000);
        var remainder = number % 1000;
        words = convertNumberToWords(thousand) + " mil";
        if (remainder > 0) {
            words += " " + convertNumberToWords(remainder);
        }
    } else {
        words = "Número demasiado grande";
    }

    return words;
}
