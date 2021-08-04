const navToggle = document.querySelector('#navToggle')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    overlay.classList.toggle('open')
    body.classList.toggle('locked')
})

let btn = document.getElementById("category")
let nav = document.getElementById("nav")

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
    btn.classList.add('btn-active')
})