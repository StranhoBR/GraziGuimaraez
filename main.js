// TIPOS DE DADOS DO JS

// char = string 'um texto aqui'

// number 12345

//bollean = true or false

////////////////////////////////////////////////////////////////////////

// DOM  - DOCUMENT OBJECT MODEL

/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE - HAMBURGUE E X */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU ESCONDER O MENU */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der o scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //scrol é maior que a altura do header
    header.classList.add('scroll')
    cons
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})
