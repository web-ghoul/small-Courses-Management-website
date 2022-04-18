import { signUp, localStorageHandle, showPass } from './framework.js'


//Handle Data Of User In LocalStorage
const signUpBtn = document.getElementById('signUpBtn')
signUpBtn.addEventListener('click', function(e) {
    e.preventDefault()
    signUp()
})

//Show/Hide Password
const showIcons = document.querySelectorAll('.eye')
showIcons.forEach((e) => {
    e.addEventListener('click', function() {
        showPass(this)
    })
})