const signupModal = document.querySelector('.signup-form-wrapper')
const loginModal = document.querySelector('.login-form-wrapper')
const signupBtn = document.querySelector('.signup-btn')
const loginBtn = document.querySelector('.login-btn')
const signupXBtn = document.querySelector('.signup-x')
const loginXbtn = document.querySelector('.login-x')
const formContainer = document.querySelector('.form-container')

signupBtn.addEventListener('click', () => {
    signupModal.classList.add('display')
    formContainer.classList.add('display')
})

signupXBtn.addEventListener('click', () => {
    signupModal.classList.remove('display')
    formContainer.classList.remove('display')
})

loginBtn.addEventListener('click', () => {
    loginModal.classList.add('display')
    formContainer.classList.add('display')
})

loginXbtn.addEventListener('click', () => {
    loginModal.classList.remove('display')
    formContainer.classList.remove('display')
})