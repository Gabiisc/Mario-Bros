// 1° mario = criando a variável - document = HTML (banco de dados) - querySelector = selecionar a classe do HTML .mario
var mario = document.querySelector(".mario")

function pular(){
    // mario da variável
    mario.classList.add('pulo')

    // função de cronometro, após 500ms ele remove a classe .pulo
    setTimeout(() =>{
    mario.classList.remove('pulo')
    }, 500)
}









// keydown = a ação listada abaixo irá ocorrer quando pressionar uma tecla
document.addEventListener('keydown', pular)