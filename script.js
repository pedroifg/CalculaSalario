function calcSalario() {
    var salario = parseFloat(document.getElementById("salario").value);

    var calcGratificacao = salario * 0.05;
    var calcImposto = salario * 0.07;

    calculoSalarioReal = (salario) + calcGratificacao - calcImposto;

    alert(calculoSalarioReal);
}