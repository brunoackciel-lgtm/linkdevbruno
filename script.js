function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
const image = document.querySelector("#profile img")

if(html.classList.contains("light")){
    image.setAttribute("src", "./assets/assets/unnamed.jpg") 

}
else{
    image.setAttribute("src", src="./assets/assets/Captura de tela 2024-06-17 064302.png")
}
    }
    
//pegar a tag image
//substituir a imagem
//se tiver light mode , adicionar a imagem light.

