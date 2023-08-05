const logoutBtn = document.getElementById("logout")


logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login',false)
    localStorage.setItem('loginAcc', undefined)
    window.open('login-register/login-register.html', '_self')
    localStorage.setItem('finished',false)
    localStorage.setItem('questionNumber',0)
})

const userTxt = document.getElementById("user")
const scoreTxt = document.getElementById("score")

const gameBtn = document.getElementById("play-btn")
const errorTxt = document.getElementById("error-msg")



if(JSON.parse(localStorage.getItem('login'))){
    userTxt.textContent = "Welcome " + JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].name
    scoreTxt.textContent = "your current score : " + JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].score
}else{
    userTxt.textContent = "Login"
}

if(JSON.parse(localStorage.getItem('finished')) === true){
    gameBtn.disabled = true
    gameBtn.textContent = "your final score is " + JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].score
}

userTxt.addEventListener('click', () => {
    if(JSON.parse(localStorage.getItem('login'))){
        window.open('account page/account.html','_self')
    }else{
        window.open('login-register/login-register.html', '_self')
    }
})

logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login',false)
    localStorage.setItem('loginAcc', undefined)
    window.open('login-register/login-register.html', '_self')
})

gameBtn.addEventListener('click', () => {
    if(JSON.parse(localStorage.getItem('login')) == true){
        window.open('game/game.html','_self')
    }else{
        errorTxt.textContent = "you need to login first"
    }
})