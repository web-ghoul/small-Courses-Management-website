import { publicLocalStorage, logIn, showPass } from './framework.js'

//Login Process Handle
let array = publicLocalStorage()
let loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click', function(e) {
    e.preventDefault()
    logIn(array)
})


//Show/Hide Password
const showIcon = document.querySelector('.eye')
showIcon.addEventListener('click', function() {
    showPass(this)
})