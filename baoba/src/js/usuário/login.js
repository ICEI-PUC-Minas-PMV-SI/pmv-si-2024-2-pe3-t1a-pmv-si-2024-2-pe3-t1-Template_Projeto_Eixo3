const loginForm = document.getElementById("login-form")
const mailErrorMsg = document.getElementById("mail-error-msg")
const passwordErrorMsg = document.getElementById("password-error-msg")

// substituir pela logística do MongoDB
// const JSONServerURL = 'https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app'
// const accountsURL = `${JSONServerURL}/accounts`
// const loggedPage = './home.html'

const accounts_hardcoded = [
    {
        mail: "teste@teste.com",
        password: "Testee@123"
    }
]

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    passwordErrorMsg.style.opacity = 0
    mailErrorMsg.style.opacity = 0

    const userMail = loginForm.email.value
    const password = loginForm.senha.value

    const foundUser = accounts_hardcoded.find(account => account.mail === userMail)

    if (!foundUser) {
        mailErrorMsg.style.opacity = 1
        loginForm.email.classList.add("input-error")
    } else if (foundUser.password !== password) {
        passwordErrorMsg.style.opacity = 1
        loginForm.senha.classList.add("input-error")
    } else {
        localStorage.setItem("user_id", foundUser.id)
        location.replace(loggedPage)
    }
})
