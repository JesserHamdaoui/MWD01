const logoutBtn = document.getElementById("logout")


logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login',false)
    localStorage.setItem('loginAcc', undefined)
    window.open('../login-register/login-register.html', '_self')
    localStorage.setItem('finished',false)
    localStorage.setItem('questionNumber',0)
})



const r1El = document.getElementById("reponseTxt1")
const r2El = document.getElementById("reponseTxt2")
const r3El = document.getElementById("reponseTxt3")
const r4El = document.getElementById("reponseTxt4")

const radio1 = document.getElementById("r1")
const radio2 = document.getElementById("r2")
const radio3 = document.getElementById("r3")
const radio4 = document.getElementById("r4")

const questionEl = document.getElementById("question")

const subBtn = document.getElementById("reponse-sub")

logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login',false)
    localStorage.setItem('loginAcc', undefined)
    window.open('../login-register/login-register.html', '_self')
})

const questionArray = [{
    question: "Lorsque l'utilisateur clique sur un bouton, un lien ou tout autre élément quelle evenement on utilise ?",
    1: 'load',
    2: 'unload',
    3: 'clik',
    4: 'change',
    correctQuestion: radio3
},{
    question: "Lorsque la page est chargée par le browser ou le navigateur quelle evenement on utilise ?",
    1: 'load',
    2: 'unload',
    3: 'clik',
    4: 'change',
    correctQuestion: radio1
},{
    question: "Lorsque l'utilisateur quitte la page quelle evenement on utilise ?",
    1: 'load',
    2: 'unload',
    3: 'clik',
    4: 'change',
    correctQuestion: radio2
},{
    question: "Lorsque l'utilisateur place le pointeur de la souris sur un lien ou tout autre élément quelle evenement on utilise ?",
    1: 'Blur',
    2: 'Focus',
    3: 'MouseOut',
    4: 'MouseOver',
    correctQuestion: radio4
},{
    question: "Lorsque le pointeur de la souris quitte un lien ou tout autre élément quelle evenement on utilise ?",
    1: 'Blur',
    2: 'Focus',
    3: 'MouseOut',
    4: 'MouseOver',
    correctQuestion: radio3
},{
    question: "Lorsque un élément de formulaire a le focus c-à-d devient la zone d'entrée active quelle evenement on utilise ?",
    1: 'Blur',
    2: 'Focus',
    3: 'MouseOut',
    4: 'MouseOver',
    correctQuestion: radio2
},{
    question: "Lorsque un élément de formulaire perd le focus c-à-d que l'utilisateur clique hors du champs et que la zone d'entrée n'est plus active quelle evenement on utilise ?",
    1: 'Blur',
    2: 'Focus',
    3: 'MouseOut',
    4: 'MouseOver',
    correctQuestion: radio1
},{
    question: "Lorsque la valeur d'un champ de formulaire est modifiée quelle evenement on utilise?",
    1: 'Change',
    2: 'Select',
    3: 'Submit',
    4: 'onSubmit',
    correctQuestion: radio1
},{
    question: "Lorsque l'utilisateur sélectionne un champ dans un élément de formulaire quelle evenement on utilise ?",
    1: 'Change',
    2: 'Select',
    3: 'Submit',
    4: 'onSubmit',
    correctQuestion: radio2
},{
    question: "Lorsque l'utilisateur clique sur le bouton Submit pour envoyer un formulaire quelle evenement on utilise ?",
    1: 'Change',
    2: 'Select',
    3: 'Submit',
    4: 'onSubmit',
    correctQuestion: radio2
}]

let userArray = JSON.parse(localStorage.getItem('Users'))
let questionNumber = 0;
let score = JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].score

if(!localStorage.getItem('questionNumber')){
    localStorage.setItem('questionNumber', questionNumber)
}else{
    questionNumber = JSON.parse(localStorage.getItem('questionNumber'))
}

if(localStorage.getItem('finishid') === false || localStorage.getItem('finishid') === true){
    localStorage.setItem('finishid', false)
}

questionEl.textContent = questionArray[questionNumber].question
r1El.textContent = questionArray[questionNumber][1]
r2El.textContent = questionArray[questionNumber][2]
r3El.textContent = questionArray[questionNumber][3]
r4El.textContent = questionArray[questionNumber][4]

subBtn.addEventListener('click', () => {
    // check correct answer
    if(!radio1.checked && !radio2.checked && !radio3.checked && !radio4.checked){
        alert('picki!!')
    }else{
        if(questionNumber === questionArray.length){
            window.open('../index.html', '_self')
            localStorage.setItem('finished', true)
        }else if(questionArray[questionNumber].correctQuestion.checked){
            score++
            userArray[JSON.parse(localStorage.getItem('loginAcc'))].score = score
            localStorage.setItem('Users', JSON.stringify(userArray))
            questionNumber++
            localStorage.setItem('questionNumber', questionNumber)
            questionEl.textContent = questionArray[questionNumber].question
            radio1.checked = false
            radio2.checked = false
            radio3.checked = false
            radio4.checked = false
            r1El.textContent = questionArray[questionNumber][1]
            r2El.textContent = questionArray[questionNumber][2]
            r3El.textContent = questionArray[questionNumber][3]
            r4El.textContent = questionArray[questionNumber][4]
        }else{
            questionNumber++
            localStorage.setItem('questionNumber', questionNumber)
            questionEl.textContent = questionArray[questionNumber].question
            radio1.checked = false
            radio2.checked = false
            radio3.checked = false
            radio4.checked = false
            r1El.textContent = questionArray[questionNumber][1]
            r2El.textContent = questionArray[questionNumber][2]
            r3El.textContent = questionArray[questionNumber][3]
            r4El.textContent = questionArray[questionNumber][4]
        }
    }
})