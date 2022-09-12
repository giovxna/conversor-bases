numero = document.getElementById("numero-informado")
base = document.getElementById("base-informada")
msg = document.getElementById("mensagem")

converter.addEventListener("click", function () {
  num = +numero.value
  baseNum = +base.value

  if (isNaN(num)) {
    msg.textContent = "só é aceito números"
    msg.style.color = "#EF5350"
    msg.style.fontSize = "1.2em"
    msg.style.position = "relative"
    msg.style.top = "30px"
  } else {
    converter = num.toString(baseNum)
    msg.textContent = converter.toUpperCase()
    msg.style.color = "#fafafa"
    msg.style.fontSize = "1.2em"
    msg.style.position = "relative"
    msg.style.top = "30px"
  }
})