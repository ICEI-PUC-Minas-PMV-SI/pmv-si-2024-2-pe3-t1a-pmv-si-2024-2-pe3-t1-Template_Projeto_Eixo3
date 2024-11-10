const loginForm = document.getElementById("login-form")
const mailErrorMsg = document.getElementById("mail-error-msg")
const passwordErrorMsg = document.getElementById("password-error-msg")


//substituir pela logística do mongodb
//const JSONServerURL = 'https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app'
//const accountsURL = `${JSONServerURL}/accounts`
//const loggedPage = './home.html'

const accounts_hardcoded =[
    {
        mail: "teste@teste.com",
        password: "Testee123"
    }
]

loginForm.addEventListener("submit",
    async (e) => {
        e.preventDefault();

        passwordErrorMsg.style.opacity = 0;
        mailErrorMsg.style.opacity = 0;

        const userMail = loginForm.email.value;
        const password = loginForm.senha.value;

        //substituir pela logística do mongodb
        //const response = await fetch(accountsURL)
        //const accounts = await response.json()

        const foundUser = accounts_hardcoded.find(account => account.mail === userMail) //FIXME: trocar por accounts

        if (!foundUser) {
            mailErrorMsg.style.opacity = 1;
        } else if (foundUser.password !== password) {
            passwordErrorMsg.style.opacity = 1;
        } else {
            //substituir pela logística do mongodb
            localStorage.setItem("user_id", foundUser.id)
            location.replace(loggedPage);
        }
    })