const logoutBtn = document.getElementById("logout")


logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login',false)
    localStorage.setItem('loginAcc', undefined)
    window.open('../login-register/login-register.html', '_self')
    localStorage.setItem('finished',false)
    localStorage.setItem('questionNumber',0)
})



const nameEl = document.getElementById("name")
const lastNameEl = document.getElementById("last-name")
const emailEl = document.getElementById("email")
const ageEl = document.getElementById("age")
const classEl = document.getElementById("class")
const passwordEl = document.getElementById("password")
const rePasswordEl = document.getElementById("repeat-password")

const emailLogEl = document.getElementById("email-log")
const passwordLogEl = document.getElementById("password-log")


const errorMsg = document.getElementById("error-msg")
const registerBtn = document.getElementById("register-btn")

const errorLogMsg = document.getElementById("error-msg-log")
const loginBtn = document.getElementById("login-btn")

const registerSwitch = document.getElementById("register-switch")
const loginSwitch = document.getElementById("login-switch")

const loginCont = document.querySelector('.login-container')
const registerCont = document.querySelector('.register-container')

if(!JSON.parse(localStorage.getItem('Users'))){
    var userArray = []
}else{
    var userArray = JSON.parse(localStorage.getItem('Users'))
}


function User(name,lastName,email,age,Class,password){
    this.name = name
    this.lastName = lastName
    this.email = email
    this.age = age
    this.Class = Class
    this.password = password  
    this.score = 0
}

function checkAlphabet(string){
    let count = 0
    for(let i = 1; i < string.length; i++){
        if (string.charAt(i).toUpperCase() < 'A' || string.charAt(i).toUpperCase() > 'Z'){
            count++
        }else if(string.charAt(0).toUpperCase() !== string.charAt(0)){
            count++
        }
        if(count === 0){
            return true
        }else{
            return false
        }
    }
}

function checkEmailUniq(email){
    let unique = true
    let emailUserArray = JSON.parse(window.localStorage.getItem('Users'))
    if(emailUserArray){
        for(let i = 0; i < emailUserArray.length; i++){
            if(email === emailUserArray[i].email){
                unique = false
            }
        }
    }
    return unique
}

function checkEmailPassword(email,password){
    let emailPasswordUserArray = JSON.parse(window.localStorage.getItem('Users'))
    if(emailPasswordUserArray){
        for(let i = 0; i < emailPasswordUserArray.length; i++){
            if(email === emailPasswordUserArray[i].email && password === emailPasswordUserArray[i].password){
                return i
            }
        }
    }
    return false
}

ageEl.addEventListener('input', () => {
    if (parseInt(ageEl.value) < 15){
        ageEl.value = '15'
    }else if(parseInt(ageEl.value) > 60){
        ageEl.value = '60'
    }
})

nameEl.addEventListener('input', () => {
    if(nameEl.value.length > 15){
        nameEl.value = nameEl.value.slice(0, nameEl.value.length-1)
    }
})

lastNameEl.addEventListener('input', () => {
    if(lastNameEl.value.length > 15){
        lastNameEl.value = lastNameEl.value.slice(0, lastNameEl.value.length-1)
    }
})


registerBtn.addEventListener('click', () => {
    if(!nameEl.value || !lastNameEl.value || !emailEl.value || !ageEl.value || !classEl.value || !passwordEl.value || !rePasswordEl.value){
        errorMsg.textContent = "Merci de ne laisser aucun champ vide" 
    }else if(!checkAlphabet(nameEl.value) || !checkAlphabet(lastNameEl.value)){
        errorMsg.textContent = "Votre nom et prenom doit etre alphabetique et comence par Majuscule "
    }else if(!checkEmailUniq(emailEl.value)){
        errorMsg.textContent = "cet email est deja utilisé"
    }else if(passwordEl.value.length <= 4) {
        errorMsg.textContent = "Votre mot de passe est trop court"
    }else if(passwordEl.value !== rePasswordEl.value){
        errorMsg.textContent = "le mot de passe et la répétition du mot de passe ne correspondent pas"
    }else{
        errorMsg.textContent = ""
        userArray.push(new User(nameEl.value, lastNameEl.value, emailEl.value, ageEl.value, classEl.value, passwordEl.value))
        localStorage.setItem('Users', JSON.stringify(userArray))
        localStorage.setItem('login',true)
        localStorage.setItem('loginAcc', userArray.length-1)
        window.open('../index.html', '_self')
        console.log(userArray)
    
    }
})


loginBtn.addEventListener('click', () => {
    if(!emailLogEl.value || !passwordLogEl.value){
        errorLogMsg.textContent = "Merci de ne laisser aucun champ vide"
    }else if(checkEmailPassword(emailLogEl.value, passwordLogEl.value) === false){
        errorLogMsg.textContent = "email ou mot de passe est faut"
    }else{
        errorLogMsg.textContent = ""
        localStorage.setItem('login',true)
        localStorage.setItem('loginAcc', checkEmailPassword(emailLogEl.value, passwordLogEl.value))
        window.open('../index.html', '_self')
    }
})


registerSwitch.addEventListener('click', () => {
    if(!registerSwitch.classList.contains('active-switch')){
        registerSwitch.classList.add('active-switch')
        loginSwitch.classList.remove('active-switch')
        registerCont.style.left = '70px'
        loginCont.style.left = '10190px'
    }
})

loginSwitch.addEventListener('click', () => {
    if(!loginSwitch.classList.contains('active-switch')){
        loginSwitch.classList.add('active-switch')
        registerSwitch.classList.remove('active-switch')
        registerCont.style.left = '10075px'
        loginCont.style.left = '-190px'
    }
})