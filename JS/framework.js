const courses = {
    'Physics': {
        id: 1,
        free: true,
        count: '723',
        start: 'Apr 6',
        rating: '90%',
        source: 'Ain-Shams university',
        sourceUrl: 'https://www.asu.edu.eg/',
        imgOne: '../imgs/physics6.jpg',
        imgTwo: '../imgs/physics9.jpg',
        hide: false,
        dataNum: '0',
        datafield: 'academy',
        about: ''
    },
    'Calculus': {
        id: 2,
        free: true,
        count: '62,113',
        start: 'Apr 19',
        rating: '85%',
        source: 'Ain-Shams university',
        sourceUrl: 'https://www.asu.edu.eg/',
        imgOne: '../imgs/calculus6.jpg',
        imgTwo: '../imgs/calculus7.jpg',
        hide: false,
        dataNum: '0',
        datafield: 'academy',
        about: ''
    },
    'Ethics': {
        id: 3,
        free: true,
        count: '32,113',
        start: 'Sept 6',
        rating: '84%',
        source: 'Ain-Shams university',
        sourceUrl: 'https://www.asu.edu.eg/',
        imgOne: '../imgs/ethics2.jpg',
        imgTwo: '../imgs/ethics1.jpg',
        hide: false,
        dataNum: '0',
        datafield: 'academy',
        about: ''
    },
    'Electronics': {
        id: 4,
        free: true,
        count: '3,213',
        start: 'Oct 8',
        rating: '98%',
        source: 'Ain-Shams university',
        sourceUrl: 'https://www.asu.edu.eg/',
        imgOne: '../imgs/electronics4.jpg',
        imgTwo: '../imgs/electronics1.jpg',
        hide: true,
        dataNum: '1',
        datafield: 'academy',
        about: ''
    },
    'Structured Programming': {
        id: 5,
        free: true,
        count: '7,243',
        start: 'Agu 12',
        rating: '93%',
        source: 'Ain-Shams university',
        sourceUrl: 'https://www.asu.edu.eg/',
        imgOne: '../imgs/php.jpg',
        imgTwo: '../imgs/php1.jpg',
        hide: true,
        dataNum: '1',
        datafield: 'academy',
        about: ''
    },
    'Python': {
        id: 6,
        free: false,
        count: '33,123',
        start: 'Nov 29',
        rating: '99%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs',
        imgOne: '../imgs/python2.jpg',
        imgTwo: '../imgs/python3.png',
        hide: true,
        dataNum: '1',
        datafield: 'program front full',
        about: ''
    },
    'Javascript': {
        id: 7,
        free: false,
        count: '12,413',
        start: 'July 4',
        rating: '100%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
        imgOne: '../imgs/js1.jpg',
        imgTwo: '../imgs/js6.png',
        hide: true,
        dataNum: '2',
        datafield: 'program front full',
        about: ''
    },
    'C++': {
        id: 8,
        free: true,
        count: '33,121',
        start: 'Dec 30',
        rating: '60%',
        source: 'FreeCodeCamp',
        sourceUrl: 'https://www.youtube.com/watch?v=8jLOx1hD3_o&t=2434s',
        imgOne: '../imgs/cpp1.jpg',
        imgTwo: '../imgs/cpp5.png',
        hide: true,
        dataNum: '2',
        datafield: 'program',
        about: ''
    },
    'C': {
        id: 9,
        free: true,
        count: '31,113',
        start: 'March 23',
        rating: '55%',
        source: 'CS50',
        sourceUrl: 'https://www.youtube.com/watch?v=NZxALvNlF-8&list=PLhQjrBD2T383f9scHRNYJkior2VvYjpSL',
        imgOne: '../imgs/c2.jpg',
        imgTwo: '../imgs/c4.jpg',
        hide: true,
        dataNum: '2',
        datafield: 'program',
        about: ''
    },
    'Html': {
        id: 10,
        free: true,
        count: '53,532',
        start: 'Apr 22',
        rating: '90%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
        imgOne: '../imgs/html2.jpg',
        imgTwo: '../imgs/html4.png',
        hide: true,
        dataNum: '3',
        datafield: 'program front full',
        about: ''
    },
    'Css': {
        id: 11,
        free: true,
        count: '31,113',
        start: 'Apr 23',
        rating: '88%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe',
        imgOne: '../imgs/css1.jpg',
        imgTwo: '../imgs/css3.png',
        hide: true,
        dataNum: '3',
        datafield: 'program front full',
        about: ''
    },
    'JQuery': {
        id: 12,
        free: true,
        count: '32,213',
        start: 'Oct 28',
        rating: '85%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=JLm1ELLqJkA&list=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB',
        imgOne: '../imgs/jquery1.png',
        imgTwo: '../imgs/jquery.jpg',
        hide: true,
        dataNum: '3',
        datafield: 'front full',
        about: ''
    },
    'React.js': {
        id: 13,
        free: false,
        count: '3,213',
        start: 'Apr 6',
        rating: '80%',
        source: 'FreeCodeCamp',
        sourceUrl: 'https://www.youtube.com/watch?v=bMknfKXIFA8&t=2s',
        imgOne: '../imgs/react1.png',
        imgTwo: '../imgs/react3.jpg',
        hide: true,
        dataNum: '4',
        datafield: 'front full',
        about: ''
    },
    'Php': {
        id: 14,
        free: true,
        count: '12,113',
        start: 'March 15',
        rating: '90.5%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=xcg9qq6SZ0w&list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq',
        imgOne: '../imgs/php1.jpg',
        imgTwo: '../imgs/php7.png',
        hide: true,
        dataNum: '4',
        datafield: 'program back full',
        about: ''
    },
    'MySQL': {
        id: 15,
        free: false,
        count: '3,213',
        start: 'Apr 6',
        rating: '90%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=DftlOK7fCtc&list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9',
        imgOne: '../imgs/mysql.jpg',
        imgTwo: '../imgs/mysql1.jpg',
        hide: true,
        dataNum: '4',
        datafield: 'program back full',
        about: ''
    },
    'Node.js': {
        id: 16,
        free: false,
        count: '14,113',
        start: 'July 23',
        rating: '70%',
        source: 'FreeCodeCamp',
        sourceUrl: 'https://www.youtube.com/watch?v=6ZRdMkX_xd0&list=PLfDx4cQoUNOa3EiUpjO04DVxEE9Ox12ta&index=12',
        imgOne: '../imgs/node-js2.jpg',
        imgTwo: '../imgs/node-js1.png',
        hide: true,
        dataNum: '5',
        datafield: 'back full',
        about: ''
    },
    'Flask': {
        id: 17,
        free: true,
        count: '5,213',
        start: 'Dec 6',
        rating: '95%',
        source: 'FreeCodeCamp',
        sourceUrl: 'https://www.youtube.com/watch?v=Z1RJmh_OqeA',
        imgOne: '../imgs/flask.png',
        imgTwo: '../imgs/flask2.png',
        hide: true,
        dataNum: '5',
        datafield: 'back full',
        about: ''
    },
    'Django': {
        id: 18,
        free: false,
        count: '32,113',
        start: 'Nov 23',
        rating: '92%',
        source: 'Abdelrahman Gamal',
        sourceUrl: 'https://www.youtube.com/watch?v=UPFKAG9rYOE&list=PLknwEmKsW8OtK_n48UOuYGxJPbSFrICxm',
        imgOne: '../imgs/django6.jpg',
        imgTwo: '../imgs/django7.jpg',
        hide: true,
        dataNum: '5',
        datafield: 'back full',
        about: ''
    },
    'CCNA': {
        id: 18,
        free: true,
        count: '52,103',
        start: 'Dec 03',
        rating: '80%',
        source: 'III - Networking',
        sourceUrl: 'https://www.youtube.com/watch?v=R8-wpkDk7yc&list=PLAqaqJU4wzYXBeFUFYs4qQ2qnWm_28xBV',
        imgOne: '../imgs/CCNA1.jpg',
        imgTwo: '../imgs/CCNA.jpg',
        hide: true,
        dataNum: '6',
        datafield: 'network',
        about: ''
    },
    'CCNB': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'III - Networking',
        sourceUrl: 'https://www.youtube.com/watch?v=dtPRkmx2YPc&list=PLAqaqJU4wzYWm_zZeeFblb-vnbnB5-ZGu',
        imgOne: '../imgs/CCNB3.jpg',
        imgTwo: '../imgs/CCNB2.jpg',
        hide: true,
        dataNum: '6',
        datafield: 'network',
        about: ''
    },
    'React Native': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'Programming with Mosh',
        sourceUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
        imgOne: '../imgs/react-native1.jpg',
        imgTwo: '../imgs/react-native3.png',
        hide: true,
        dataNum: '6',
        datafield: 'mobile',
        about: ''
    },
    'Flutter': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'Wael abo hamza',
        sourceUrl: 'https://www.youtube.com/watch?v=ckwAJ4O3fvU&list=PL93xoMrxRJIsoHL8gG1UBfVoXKi7OxbLU',
        imgOne: '../imgs/flutter.jpg',
        imgTwo: '../imgs/flutter2.png',
        hide: true,
        dataNum: '7',
        datafield: 'mobile',
        about: ''
    },
    'Kivy': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'SMA CODING',
        sourceUrl: 'https://www.youtube.com/watch?v=eIbp8RFW3ys&list=PL2opeqXBU7T3z3xXwa7YNxR-MKqvbUzAJ&index=8',
        imgOne: '../imgs/kivy1.jpg',
        imgTwo: '../imgs/kivy.png',
        hide: true,
        dataNum: '7',
        datafield: 'mobile',
        about: ''
    },
    'XSS': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'Mina Ashraf',
        sourceUrl: 'https://www.youtube.com/watch?v=U5D0uSKGQ5A&t=31s',
        imgOne: '../imgs/xss.jpg',
        imgTwo: '../imgs/xss3.jpg',
        hide: true,
        dataNum: '7',
        datafield: 'cyber',
        about: ''
    },
    'CS50': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'cs50',
        sourceUrl: 'https://www.youtube.com/watch?v=NZxALvNlF-8&list=PLhQjrBD2T383f9scHRNYJkior2VvYjpSL',
        imgOne: '../imgs/cs501.jpg',
        imgTwo: '../imgs/cs503.png',
        hide: true,
        dataNum: '8',
        datafield: 'program',
        about: ''
    },
    'Figma': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'FreeCodeCamp',
        sourceUrl: 'https://www.youtube.com/watch?v=jwCmIBJ8Jtc',
        imgOne: '../imgs/figma.jpg',
        imgTwo: '../imgs/figma2.png',
        hide: true,
        dataNum: '8',
        datafield: 'front full',
        about: ''
    },
    'Typescript': {
        id: 18,
        free: false,
        count: '12,113',
        start: 'Oct 02',
        rating: '85%',
        source: 'The Net Ninja',
        sourceUrl: 'https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI',
        imgOne: '../imgs/typescript.png',
        imgTwo: '../imgs/typescript4.jpg',
        hide: true,
        dataNum: '8',
        datafield: 'program front full',
        about: ''
    },
    'C#': {
        id: 19,
        free: true,
        count: '115,130',
        start: 'Agu 24',
        rating: '90%',
        source: 'ahmed mohamady',
        sourceUrl: 'https://www.youtube.com/watch?v=CxGTRLkXUYg&list=PLqPejUavRNTWrbmE7fTvBC1HH-sAmz7c3',
        imgOne: '../imgs/c-sharp3.png',
        imgTwo: '../imgs/c-sharp2.png',
        hide: true,
        dataNum: '9',
        datafield: 'program',
        about: ''
    },
    'Java': {
        id: 20,
        free: true,
        count: '160,030',
        start: 'Dec 04',
        rating: '95%',
        source: 'محمد دسوقى',
        sourceUrl: 'https://www.youtube.com/watch?v=FbviMTJ_vP8&list=PL1DUmTEdeA6K7rdxKiWJq6JIxTvHalY8f',
        imgOne: '../imgs/java.png',
        imgTwo: '../imgs/java1.jpg',
        hide: true,
        dataNum: '9',
        datafield: 'program',
        about: ''
    },
    'Angular': {
        id: 21,
        free: true,
        count: '200,130',
        start: 'Oct 14',
        rating: '75%',
        source: 'Angular Army',
        sourceUrl: 'https://www.youtube.com/watch?v=zWRt03h9Ju8&list=PL1ano0qwNuBwA90YwA-5d8g2wbOYHkl5h',
        imgOne: '../imgs/angular.png',
        imgTwo: '../imgs/angular1.jpg',
        hide: true,
        dataNum: '9',
        datafield: 'full front',
        about: ''
    },
    'Vue.js': {
        id: 22,
        free: false,
        count: '20,130',
        start: 'July 14',
        rating: '80%',
        source: 'Elzero Web School',
        sourceUrl: 'https://www.youtube.com/watch?v=13fv-xEAFmY&list=PLDoPjvoNmBAxr5AqK3Yz4DWYKVSmIFziw',
        imgOne: '../imgs/vue-js6.jpg',
        imgTwo: '../imgs/vue-js4.png',
        hide: true,
        dataNum: '10',
        datafield: 'full front',
        about: ''
    },
    'MCSA': {
        id: 23,
        free: false,
        count: '201,050',
        start: 'Jan 14',
        rating: '95%',
        source: 'Free4arab | Information Technology',
        sourceUrl: 'https://www.youtube.com/watch?v=MIDEwz2JJAs&list=PLCIJjtzQPZJ-pgNVYqsHPQGSD5oGmQypP',
        imgOne: '../imgs/mcsa1.jpg',
        imgTwo: '../imgs/mcsa.png',
        hide: true,
        dataNum: '10',
        datafield: 'cyber',
        about: ''
    }
}

const members = {
    'mahmoud salama': {
        country: 'egypt',
        imgCountry: '../imgs/egyptFlag.jpg',
        imgMember: '../imgs/salama.jpg',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat qui ab nostrum facere hic eum placeat, id eligendi enim voluptatem sint distinctio delectus officiis nihil dolor tenetur quasi laborum blanditiis!'
    },
    'youseef yehia': {
        country: 'egypt',
        imgCountry: '../imgs/egyptFlag.jpg',
        imgMember: '../imgs/youseef.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae optio repellendus perspiciatis ipsum labore fugit debitis, quas et soluta iure impedit? Tempore expedita amet debitis tenetur nulla veniam harum.'
    },
    'mostafa azzam': {
        country: 'egypt',
        imgCountry: '../imgs/egyptFlag.jpg',
        imgMember: '../imgs/mostafa.jpg',
        info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui eaque nemo quidem deserunt officiis reprehenderit dolor molestias nostrum, laboriosam quo quibusdam vel vitae porro eius sequi nulla dolorem veniam.'
    },
    'ahmed assman': {
        country: 'egypt',
        imgCountry: '../imgs/egyptFlag.jpg',
        imgMember: '../imgs/ahmed2.png',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nobis velit, cupiditate vero accusantium esse magni facere ad commodi dolorum, eos non quasi vitae quam suscipit reiciendis libero sunt ducimus?'
    },
    'fatn mohammed': {
        country: 'egypt',
        imgCountry: '../imgs/egyptFlag.jpg',
        imgMember: '../imgs/fatn4.jpg',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam provident eligendi quae labore laborum suscipit vitae non exercitationem corrupti, alias aliquid in odit beatae, animi sit et ipsa reprehenderit.'
    },
    'umar gambo': {
        country: 'Nigeria',
        imgCountry: '../imgs/nigeriaFlag.jpg',
        imgMember: '../imgs/umar.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nisi odio temporibus eum quae, ipsam ratione nostrum magnam beatae quibusdam dolore similique iure cum, adipisci omnis. Sapiente ex nemo sunt.'
    },
    'farida abobaker': {
        country: 'Nigeria',
        imgCountry: '../imgs/nigeriaFlag.jpg',
        imgMember: '../imgs/farida.jpg',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab itaque adipisci possimus! Modi dolor, voluptate quisquam veritatis excepturi laudantium, repellat cumque ex unde, error voluptatibus aspernatur tempore nam adipisci.'
    }
}

//-------------------------------------

let keys = Object.keys(courses)
let keysMembers = Object.keys(members)

//-------------------------------------

//About Page

//members Section Handle
const memebersHandle = function() {
    let menus = ''
    let firstName, firstLetter;
    for (let i = 0; i < keysMembers.length; i++) {
        firstName = (keysMembers[i].split(' ')[0])[0].toUpperCase() + (keysMembers[i].split(' ')[0]).slice(1)
        firstLetter = keysMembers[i].split(' ')[1][0].toUpperCase()
        menus += `<menu class="member flex-start">
        <picture>
            <img src="${members[keysMembers[i]].imgMember}" alt="">
        </picture>
        <div class="info grid-start">
            <div class="data grid-start">
                <span class="name">${firstName +' '+firstLetter}.</span>
                <span class="country flex-start">
                    <img src="${members[keysMembers[i]].imgCountry}" alt="">
                   <p>Egypt</p>    
                </span>
            </div>
            <p>${members[keysMembers[i]].info}</p>
        </div>
    </menu>`
    }
    const memebersParent = document.querySelector('.members .contain')
    memebersParent.innerHTML = menus
}


//-------------------------------------


//All Page

//Get Current Year
const thisYear = function() {
    if (document.getElementById('year')) {
        document.getElementById('year').textContent = new Date().getFullYear()
    }
}

//Header Handle
const headerHandle = function() {
    const header = document.querySelector('header .contain')
    window.onscroll = function() {
        if (window.scrollY > 225) {
            header.classList.add('scroll-header')
        } else {
            header.classList.remove('scroll-header')
        }
    }
}

//Show/hide Links
const toggleLinks = function() {
    const iconList = document.querySelector('header .contain > .icon')
    const links = document.querySelector('header .contain .links')
    iconList.addEventListener('click', function() {
        links.classList.toggle('show-links')
    })
}


//-------------------------------------


//Course Page

//Courses Section Handle
const coursesSection = function() {
        const coursesMenu = document.querySelector('.courses .contain menu')
        let course = ''
        for (let i = 0; i < keys.length; i++) {
            course += `
        <div data-field = "${courses[keys[i]].datafield}"  class="box flex-start">
        <a href="${courses[keys[i]].sourceUrl}" class="flex-start">
            <picture>
                <img src=${courses[keys[i]].imgOne} alt="">
            </picture>
            <div class="content grid-start">
                <h3>${keys[i]}</h3>
                <p>${courses[keys[i]].source}</p>
                ${courses[keys[i]].free ? `<span class='course'>Free</span>`:`<span class='course'>$120</span>` }
                <nav class='flex-start'>
                    <span class="rate">${courses[keys[i]].rating}</span>
                    <span class="num">${courses[keys[i]].count} Students</span>
                </nav>
            </div>
            </a>
        </div>
   `
    }
    coursesMenu.innerHTML = course
}

//Filter Handle
const filterSection = function(){
    let array = []
    let b = false
    const checkBoxes = document.querySelectorAll('.courses .contain .filter form .check input')
    const boxes = document.querySelectorAll('.courses .contain menu .box')
    checkBoxes.forEach(c=>{
       c.checked ? array.push(c.getAttribute('id')) :''
    })
    if(array.length === 0){
        boxes.forEach((e)=>{
            e.classList.remove('hide')
        })
        return 0;
    }
    let arr =[]
    boxes.forEach((box)=>{
        b = false
        arr = box.dataset.field.split(' ')
        for(let i=0;i<arr.length;i++){
            for(let x =0 ;x<array.length;x++){
                if(arr[i] === array[x]) {
                    b = true
                }
            }
        }
        b ? box.classList.remove('hide'):box.classList.add('hide')
    })
}


//-------------------------------------


//Home Page

//Course Home Section Handle
const courseHome = function() {
    keys = Object.keys(courses)
    let boxes = ''
    for (let i = 0; i < keys.length; i++) {
        boxes += `
        <div class="box flex-center ${courses[keys[i]].hide ? 'hide-box':''}">
            <a href='${courses[keys[i]].sourceUrl}' class='grid-center'>
                <picture>
                    <img src="${courses[keys[i]].imgOne}" alt="">
                    <div style='background-image:url(${courses[keys[i]].imgTwo})' class="abs"></div>
                </picture>
                <div class="content grid-start">
                    <nav class="flex-end">
                    ${courses[keys[i]].free ? `<span class="free">Free</span>` : `<span class="free">100$</span>`}
                    </nav>
                    <div class="info grid-start">
                        <div class="part grid-start">
                            <h3>${keys[i]}</h3>
                            <p>${courses[keys[i]].source}</p>
                        </div>
                        <h4>Course</h4>
                    </div>
                </div>
            </a>
        </div>
        `
}
const menuBoxes = document.querySelector('.course-home .contain menu')
menuBoxes.innerHTML = boxes
}

//Build Slides Of Courses
const BuildSlides = function(){
    const slides = document.querySelector('.course-home .slides')
    let slidesText=''
    if(keys.length > 3){
        slidesText = `<span data-num="0" class="slide active"></span>`
        for(let i=0;i<(keys.length)/3 -1;i++){
            slidesText += `<span data-num="${i+1}" class='slide'></span>`
        }
    }
    slides.innerHTML = slidesText
}

//Course Home Section Slides Handle
const courseHomeSlide = function(){
    const slides =  document.querySelectorAll('.course-home .contain .slides .slide')
    slides.forEach((e)=>{
        e.addEventListener('click',function(){
            slides.forEach((s) =>{
                s.classList.remove('active')
            })
            e.classList.add('active')
            const data = e.dataset.num
            keys.forEach((key)=>{
                courses[key].hide = true
            })
            keys.forEach((c)=>{
                if(courses[c].dataNum === data){
                   courses[c].hide = false
                }
            })
            courseHome()
        })
    })
}

//Explore Section Handle
const exploreHandle = function(){
    let array = []
    let arr = []
    let obj = {
        'academy':{
            name : 'academy',
            number :0,
            imgField:'../imgs/pic3.jpg'
        },
        'front':{
            name : 'front-end development',
            number :0,
            imgField:'../imgs/front.jpg'
        },
        'back':{
            name : 'back-end development',
            number :0,
            imgField:'../imgs/back2.png'
        },
        'full':{
            name : 'full-stack development',
            number :0,
            imgField:'../imgs/full.png'
        },
        'program':{
            name : 'programming language',
            number :0,
            imgField:'../imgs/program.jpg'
        },
        'cyber':{
            name : 'cyber security',
            number :0,
            imgField:'../imgs/cyber1.png'
        },
        'network':{
            name : 'network',
            number :0,
            imgField:'../imgs/network.jpg'
        },
        'mobile':{
            name : 'mobile',
            number :0,
            imgField:'../imgs/figma8.png'
        }
    }
   keys.forEach((key)=>{
       arr=[]
       arr = courses[key].datafield.split(' ')
       array.push(arr)
   })
   array.forEach((r)=>{
       r.forEach(e => {
           obj[e].number = obj[e].number + 1
       });
   })

   //Build Boxes of Explore Section
   const menuExplore = document.querySelector('.explore .contain menu')
   let boxes = ''
   let fields = Object.keys(obj)
   fields.forEach((f)=>{
       boxes += `<div class="box">
       <a href="./courses.html" class="grid-start">
           <picture>
               <div class='img' style='background-image:url("${obj[f].imgField}")'></div>
           </picture>

           <div class="content grid-start">
               <span class="name">${obj[f].name}</span>
               <span class="num">${obj[f].number} Courses</span>
           </div>
       </a>
   </div>`
   })
   menuExplore.innerHTML = boxes
}

//Page Handle For User
const homeHandleForUser = function(){
    if (localStorage.getItem('userData')) {
        let userData = JSON.parse(localStorage.getItem('userData'))
    
        let logSignLink = document.querySelector('header .contain .links .btns')
        logSignLink.classList.add('hide')
    
        let userLink = document.querySelector('header .contain .links .link.user-data')
        userLink.classList.remove('hide')
    
        let username = document.querySelector('header .contain .links .link.user-data a .user span.name')
        username.textContent = userData.name
    }
}


//-------------------------------------


//Profile Page

//Build Profile 
const buildProfile = function(){
    const profilePicture = document.querySelector('.profile > picture')
    let data = JSON.parse(localStorage.getItem('userData'))
    console.log(data)
    let pro = `
            <img class="avater center flex-center" src="${data.img}" alt="avater">
            <span class="name">${data.name}</span>`
    profilePicture.innerHTML = pro
}

//Change Password Handle 1
const changePassHandle1 = function(){
    const body = document.querySelector('body')
    const popUp = document.querySelector('.profile > .change-pass')
    window.scroll({
        top:0,
        behavior:'smooth'
    })
    popUp.classList.toggle('hide')
    body.classList.toggle('body-pop-up')
}

//Change Password Handle 2
const changePassHandle2 = function(){
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const conPass = document.getElementById('conPass')
    console.log(email)
    console.log(pass)
    console.log(conPass)
    if(localStorage.getItem('dataOfUser')){
        let array = JSON.parse(localStorage.getItem('dataOfUser'))
        console.log(array)
        if(!validEmail(email)){
            Swal.fire({
                title: 'Error!',
                text: 'Invalid Email',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        else if(!validPass(pass)){
            Swal.fire({
                title: 'Error!',
                text: 'Invalid Password (must be contain at least one upper case ,one lower case , one digit,one special character, minimum 8 characters or digits)',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        else if(pass.value !== conPass.value){
            Swal.fire({
                title: 'Error!',
                text: 'Password Is\'nt equal to Confirm Password',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        if(validEmail(email) && validPass(pass) && pass.value === conPass.value && array.length > 0){
            for(let i=0;i<array.length;i++){
                if(array[i].email === email.value){
                    array[i].pass = pass.value
                    break
                }
            }
            email.value=''
            pass.value=''
            conPass.value=''
            Swal.fire({
                title: 'conguratulation!!',
                text: 'Password is changed',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
        localStorage.setItem('dataOfUser',JSON.stringify(array))
    }
}

//Change Avater Handle
const changeAvaterHandle = function(){
    const body = document.querySelector('body')
    const popUp = document.querySelector('.profile > .change-avater')
    console.log(2)
    window.scroll({
        top:0,
        behavior:'smooth'
    })
    popUp.classList.toggle('hide')
    body.classList.toggle('body-pop-up')
}

//Change Avater
const changeAvater = function(img){
    const dataUser = JSON.parse(localStorage.getItem('userData'))
    const data = JSON.parse(localStorage.getItem('dataOfUser'))
    const avater = document.querySelector('.profile > picture img')
    const imgSrc = img.getAttribute('src')
    console.log(imgSrc)
    dataUser.img = imgSrc
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === dataUser.email) {
            data[i].img = imgSrc
        }
    }
    localStorage.setItem('dataOfUser',JSON.stringify(data))
    localStorage.setItem('userData',JSON.stringify(dataUser))
    avater.setAttribute('src' , imgSrc)
}

//Page Handle For User
const profileHandleForUser = function(){
   if(localStorage.getItem('userData')){
       let userData = JSON.parse(localStorage.getItem('userData'))

       const username = document.querySelector('.profile picture span.name')
       username.textContent = userData.name

       const email = document.querySelector('.profile .info-user .email .gmail')
       email.textContent = userData.email

       const phone = document.querySelector('.profile .info-user .phone .number')
       phone.textContent = userData.phone

       const seat = document.querySelector('.profile .info-user .seat .seat-no')
       seat.textContent = userData['seat Number']
   }
}


//-------------------------------------


//Sign Up Page

//Sign up Handle
const signUp = function(){
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const seatNo = document.getElementById('seat')
    const pass = document.getElementById('pass')
    const conPass = document.getElementById('conPass')
    const dataUser = {
        'name':'',
        'email':'',
        'phone':'',
        'seat Number':'',
        'pass':'',
        'img':'',
        'year':'',
        'month':'',
        'day':'',
        'hour':'',
        'minute':'',
        'second':'',
    }
    if(validName(name) && validEmail(email) && validPhone(phone) && validSeatNo(seatNo) && validPass(pass)  && conPass.value === pass.value){
        dataUser['name'] = name.value
        dataUser['email'] = email.value
        dataUser['phone'] = phone.value
        dataUser['seat Number'] = seatNo.value
        dataUser['pass'] = pass.value
        dataUser['year'] = new Date().getFullYear()
        dataUser['month'] = new Date().getMonth()
        dataUser['day'] = new Date().getDay()
        dataUser['hour'] = new Date().getHours()
        dataUser['minute'] = new Date().getMinutes()
        dataUser['second'] = new Date().getSeconds()
        dataUser['img'] = '../imgs/user.jpg'
        Swal.fire({
            title: 'congratulations!',
            text: 'your accout is created',
            icon: 'success',
            confirmButtonText: '<a style="color:#fff" href="./home.html">Go To Home</a>'
        })
        localStorage.setItem('userData',JSON.stringify(dataUser))
        localStorageHandle(dataUser)
    }
    else if(name.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'you forgot Username',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(seatNo.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'you forgot Seat Number',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(email.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'you forgot Email',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(pass.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'you forgot Password',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(phone.value === ''){
        Swal.fire({
            title: 'Error!',
            text: 'you forgot Phone Number',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(!validName(name)){
        Swal.fire({
            title: 'Error!',
            text: 'Username must not contain whitespace',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(!validEmail(email)){
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Email',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(!validPhone(phone)){
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Phone Number (must be at least 11 numbers)',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(!validSeatNo(seatNo)){
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Seat Number Number (Must be at least 10 numbers)',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(!validPass(pass)){
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Password (must be contain at least one upper case ,one lower case , one digit,one special character, minimum 8 characters or digits)',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if(conPass.value != pass.value){
        Swal.fire({
            title: 'Error!',
            text: 'Password isn\'t match',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
}

//LocalStorage Handle
const localStorageHandle = function(data){
    let array=[]
    if (localStorage.getItem('dataOfUser')) {
        let isEmailExist = false
        let isNameExist = false
        array = JSON.parse(localStorage.getItem('dataOfUser'))
        console.log(array ,data)
        if(array.length > 0){
            for(let i= 0;i<array.length;i++){
                if(array[i].email === data.email){
                    console.log(data.email)
                    isEmailExist = true
                }
                if(array[i].name === data.name){
                    console.log(array[i].name)
                    isNameExist = true
                }
            }
        }
 
        if(isEmailExist){
            Swal.fire({
                title: 'Error!',
                text: 'email aleardy has account',
                icon: 'error',
                confirmButtonText: '<a style="color:#fff" href="./login.html">Go To login</a>'
            })
        }
        if(isNameExist){
            Swal.fire({
                title: 'Error!',
                text: 'Username aleardy token',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        else if(!isEmailExist && !isNameExist){
            array.push(data)
        }
        localStorage.setItem('dataOfUser', JSON.stringify(array))
    }
    else {
        array.push(data)
        localStorage.setItem('dataOfUser',JSON.stringify(array))
    }
}

//Show LocalStorage to Public
const publicLocalStorage = function() {
    if (localStorage.getItem('dataOfUser')) {
        return JSON.parse(localStorage.getItem('dataOfUser'))
    }
    return []
}

//Validated

//valid name 
const validName = function(name){
    let reg = /^\S*$/
    return reg.test(name.value) ? true : false;
}

//valid email
const validEmail = function(email){
    let reg = /\w+@\w+.\w+/
    return reg.test(email.value) ? true : false;
}

//valid phone 
const validPhone = function(phone){
    let reg = /\d{11,}/
    return reg.test(phone.value) ? true : false;
}

//valid  seat number
const validSeatNo = function(seatNo){
    let reg = /\d{10,11}/
    return reg.test(seatNo.value) ? true : false;
}

//valid password
const validPass = function(pass){
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    return reg.test(pass.value) ? true : false;
}


//Login Page

//Login Handle
const logIn = function(arr){
  const email = document.getElementById('email')
  const pass = document.getElementById('pass')
  if(!validEmail(email)){
    Swal.fire({
        title: 'Error!',
        text: 'Invalid Email',
        icon: 'error',
        confirmButtonText: 'OK'
    })
    return 0
  }
  if(!validPass(pass)){
    let x = validPass(pass)
    console.log(x)
    Swal.fire({
        title: 'Error!',
        text: 'Invalid password',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
    return 0
  }
  for(let i=0;i<arr.length;i++){
      if(arr[i].email === email.value && arr[i].pass === pass.value){
          localStorage.setItem('userData',JSON.stringify(arr[i]))
          window.location.replace('http://127.0.0.1:5500/Portfolio/Structured-Programming-Project/HTML/home.html')
          return 0;
      }
      if(arr[i].email === email.value && arr[i].pass !== pass.value){
            Swal.fire({
                title: 'Sorry!',
                text: 'Password Is Incorrect',
                icon: 'error',
                confirmButtonText: '<a style="color:#fff" href="./signup.html">Go To Sign up</a>'
            })         
            return 0;
      }
  }   
  Swal.fire({
    title: 'Sorry!',
    text: 'your email isn\'t have an account',
    icon: 'error',
    confirmButtonText: '<a style="color:#fff" href="./signup.html">Go To Sign up</a>'
  })
}

//Show/Hide Password Icon
const showPass = function(icon){
    if(icon.firstChild.classList.contains('fa-eye')){
        icon.firstChild.classList.remove('fa-eye')
        icon.firstChild.classList.add('fa-eye-slash')
        icon.parentElement.nextElementSibling.setAttribute('type','text')
    }
    else if(icon.firstChild.classList.contains('fa-eye-slash')){
        icon.firstChild.classList.add('fa-eye')
        icon.firstChild.classList.remove('fa-eye-slash')
        icon.parentElement.nextElementSibling.setAttribute('type','password')
    }
}


//-------------------------------------


//Run In Public

//Handle Header
headerHandle();

//Show/Hide Links
if(document.querySelector('header .contain .links')){
    //Show/Hide Links
    toggleLinks();
}

//Get Current Year
thisYear()

//Page Handle For User
if(document.querySelector('header .contain .links .btns')){
    homeHandleForUser()
}
//-------------------------------------

export { courses, thisYear, headerHandle, courseHome,toggleLinks ,coursesSection,courseHomeSlide,signUp,localStorageHandle,BuildSlides,publicLocalStorage,logIn,showPass,memebersHandle,filterSection,exploreHandle,changePassHandle1,changePassHandle2,homeHandleForUser,profileHandleForUser,changeAvaterHandle,changeAvater,buildProfile};