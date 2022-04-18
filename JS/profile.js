import { changePassHandle1, changePassHandle2, showPass, profileHandleForUser, changeAvater, changeAvaterHandle, buildProfile } from './framework.js'


//Build Profile
buildProfile()

//Change Password Button 2 Handle
const changePassBtn1 = document.querySelector('.profile .info-user .change-pass-btn .btn')
changePassBtn1.addEventListener('click', function() {
    changePassHandle1()
})

//Change Password Button 1 Handle
const changePassBtn2 = document.querySelector('.profile .change-pass .pop-up form .in .btn')
changePassBtn2.addEventListener('click', function(e) {
    e.preventDefault()
    changePassHandle2()
})


//Click On Overlay Of Change Password (Hide/Show)
const overlay = document.querySelector('.profile .change-pass .overlay')
overlay.addEventListener('click', function() {
    changePassHandle1()
})

//Click On Overlay Of Change Avater (Hide/Show)
const overlay1 = document.querySelector('.profile .change-avater .overlay')
overlay1.addEventListener('click', function() {
    changeAvaterHandle()
})


//Show Avatars
const avaterOfUser = document.querySelector('.profile > picture img.avater')
avaterOfUser.addEventListener('click', function() {
    console.log(avaterOfUser)
    changeAvaterHandle()
})

//Change Avater
const images = document.querySelectorAll('.profile .change-avater .pop-up .pics picture img')
images.forEach((img) => {
    img.addEventListener('click', function() {
        changeAvater(img)
        changeAvaterHandle()
    })
})



//Show/Hide Password
const icons = document.querySelectorAll('.profile .change-pass .pop-up form .in label span.eye')
icons.forEach((icon) => {
    icon.addEventListener('click', function() {
        showPass(icon)
    })
})


//Page Handle For User
profileHandleForUser()