console.clear();

function mudaTema() {
  document.body.classList.toggle("dark");
  var valorMudaTema = document.getElementById("mudaTema");
  if (valorMudaTema.textContent == "Desligar Luz") {
    valorMudaTema.textContent = "Ligar Luz"}
  else {valorMudaTema.textContent = "Desligar Luz"}   
}