const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

mensaje.addEventListener("input", function (e) {
  const target = e.target;
  const longitudMax = target.getAttribute("maxlength");
  const longitudAct = target.value.length;

  if (longitudAct == longitudMax) {
    contador.innerHTML = `Límite de caracteres`;
  } else {
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
  }
});
