const navToggle = document.querySelector('#navToggle')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const navInContent = document.getElementById('navInContent')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    overlay.classList.toggle('open')
    body.classList.toggle('locked')
})

let btn = document.getElementById("category")
let btnNav = document.getElementById("btn-nav")
let btnClose = document.getElementById("btn-close")
let nav = document.getElementById("nav")

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
    btn.classList.add('btn-active')
})

btnNav.addEventListener('click', () => {
    nav.classList.toggle('active')
    btn.classList.add('btn-active')
})

btnClose.addEventListener('click', () => {
    navInContent.style.display = 'none'
    nav.classList.toggle('active')
    btn.classList.add('btn-active')
})