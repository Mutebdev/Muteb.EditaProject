function toogleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")
    //substituir a img
    if (html.classList.contains('light')) {
        //se tiver light mode, add img light
        img.setAttribute('src', './imagens/Muteb1recortado.jpg')
    } else {
        //se tiver sem light mode, manter a img normal
        img.setAttribute('src', './imagens/mutebProject.jpg')
    }


}