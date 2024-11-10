const signup_form = document.getElementById("signup-form")
const mail_error_msg = document.getElementById("mail-already-exists")
const confirmation_mail_msg = document.getElementById("mail-confirmation")
const confirmation_password_msg = document.getElementById("senha-confirmation")
const password_out_of_standarts_msg = document.getElementById("password-out-of-standarts-message")
const required_messages = document.querySelectorAll(".required-message")

const emails_hardcoded = ["teste@teste.com", "user@exemplo.com"]

const clearFieldsErrors = () => {
    mail_error_msg.style.opacity = 0
    confirmation_mail_msg.style.opacity = 0
    confirmation_password_msg.style.opacity = 0
    password_out_of_standarts_msg.style.opacity = 0
    required_messages.forEach(msg => msg.style.opacity = 0)
}

signup_form.addEventListener("submit", (e) => {
    e.preventDefault()

    clearFieldsErrors()
    
    const email = signup_form.email.value
    const confirm_email = signup_form["confirm-email"].value
    const senha = signup_form.senha.value
    const confirm_senha = signup_form["confirma-senha"].value

    for (let field of signup_form.elements) {
        if (!field.value.trim() && field.type !== "submit") {
            document.getElementById(field.id + '-required').style.opacity = 1
            return
        }
    }

    if (emails_hardcoded.includes(email)) {
        mail_error_msg.style.opacity = 1
        return
    }

    if (email !== confirm_email) {
        confirmation_mail_msg.style.opacity = 1
        return
    }


    const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!password_regex.test(senha)) {
        password_out_of_standarts_msg.style.opacity = 1
        return
    }

    if (senha !== confirm_senha) {
        confirmation_password_msg.style.opacity = 1
        return
    }

    alert("Usuário cadastrado com sucesso!")
    location.replace("./login.html") 
})
