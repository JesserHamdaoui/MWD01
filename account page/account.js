const logoutBtn = document.getElementById("logout")


logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login',false)
    localStorage.setItem('loginAcc', undefined)
    window.open('../login-register/login-register.html', '_self')
    localStorage.setItem('finished',false)
    localStorage.setItem('questionNumber',0)
})


if(!JSON.parse(localStorage.getItem('login'))){
    window.open('../login-register/login-register.html', '_self')
}else{
    const nameEl = document.getElementById("name")
    const lastNameEl = document.getElementById("lastname")
    const emailEl = document.getElementById("email")
    const ageEl = document.getElementById("age")
    const classEl = document.getElementById("class")
    const scoreEl = document.getElementById("score")

    const logoutBtn = document.getElementById("logout")


    nameEl.textContent = JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].name
    lastNameEl.textContent = JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].lastName
    emailEl.textContent = JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].email
    ageEl.textContent = JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].age
    classEl.textContent = JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].Class
    scoreEl.textContent = JSON.parse(localStorage.getItem('Users'))[JSON.parse(localStorage.getItem('loginAcc'))].score

    logoutBtn.addEventListener('click', () => {
        localStorage.setItem('login',false)
        localStorage.setItem('loginAcc', undefined)
        window.open('../login-register/login-register.html', '_self')
    })
}
