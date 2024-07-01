let outputCpf = document.getElementsByClassName("cpfValue");
let outputTelefone = document.getElementsByClassName("telefoneValue");

cpf.oninput = function () {
    let cleanedValue = this.value.replace(/\D/g, "");

    let formattedValue =
        cleanedValue.slice(0, 3) +
        "." +
        cleanedValue.slice(3, 6) +
        "." +
        cleanedValue.slice(6, 9) +
        "-" +
        cleanedValue.slice(9);

    outputCpf[0].innerHTML = formattedValue;
};
telefone.oninput = function () {
    let cleanedValue = this.value.replace(/\D/g, "");
    let formattedValue =
        "(" +
        cleanedValue.slice(0, 2) +
        ") " +
        cleanedValue.slice(2, 7) +
        "-" +
        cleanedValue.slice(6, 10)

    outputTelefone[0].innerHTML = formattedValue;
};
