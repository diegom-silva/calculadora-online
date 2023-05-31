function calcularValores() {
  const valor1 = parseFloat(document.querySelector("#txtValor1").value);
  const valor2 = parseFloat(document.querySelector("#txtValor2").value);
  const operacao = document.getElementById("cbxOperacao").value;

  let resultado;

  if (operacao === "+") {
    resultado = valor1 + valor2;
  } else if (operacao === "-") {
    resultado = valor1 - valor2;
  } else if (operacao === "/") {
    resultado = valor1 / valor2;
  } else if (operacao === "*") {
    resultado = valor1 * valor2;
  }

  document.getElementById("txtResultado").innerHTML = resultado;
}
