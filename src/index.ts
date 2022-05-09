let base = <HTMLInputElement>document.getElementById("number1");
let exponente = <HTMLInputElement>document.getElementById("number2");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let resultadoHtml = <HTMLParagraphElement>(
  document.getElementById("resultadoHtml")
);

function potenciar(base: number, exponente: number) {
  let sumaExponente = base;
  for (let contador = 1; contador < Number(exponente); contador++) {
    sumaExponente = Number(sumaExponente) * Number(base);
  }
  let resultado = Number(sumaExponente);
  return resultado;
}

btnEnviar.addEventListener("click", () => {
  base = Number(base.value);
  exponente = Number(exponente.value);

  potenciar(base, exponente);
  if (exponente === 0) {
    resultadoHtml.innerHTML = "el resultado es 1";
  } else if (exponente < 0) {
    resultadoHtml.innerHTML = "El exponente debe ser igual o mayor a 0";
  } else {
    resultadoHtml.innerHTML = `El resultado es ${potenciar(base, exponente)}`;
  }
});

/*
base        exponente      resultado experado
2             2               4
-4            4               256
3             2               9
5             -3              el exponente debe ser igual o mayor a 0
5             0               1

*/
