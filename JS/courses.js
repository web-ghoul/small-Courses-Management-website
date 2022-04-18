import { coursesSection, filterSection } from './framework.js'


//Course Section Handle
coursesSection();


//Filter Section Handle
const checkBoxes = document.querySelectorAll('.courses .contain .filter form .check input')
checkBoxes.forEach((box) => {
    box.addEventListener('click', function() {
        filterSection()
    })
})