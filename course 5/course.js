const logoutBtn = document.getElementById("logout")


logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login',false)
    localStorage.setItem('loginAcc', undefined)
    window.open('../login-register/login-register.html', '_self')
    localStorage.setItem('finished',false)
    localStorage.setItem('questionNumber',0)
})