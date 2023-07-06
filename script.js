function toggleMode() {
  const html = document.documentElement
  //Toggle verifica se já possui, caso possua, ele remove, senão ele adiciona
  html.classList.toggle("light")

  //Pegar a tag img, e substituir a imagem do profile. -->
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //Se estiver light mode adiciona a imagem.
    img.setAttribute("src", "assets/assets/avatar-light.png")
    img.setAttribute("alt", "Imagem Mayk no light")
  } else {
    //Se estiver noraml, manter a imagem
    img.setAttribute("src", "assets/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo usando óculos, camisa preta, barba em um fundo amarelo"
    )
  }
}
