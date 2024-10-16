class User {
    static id = 0

    constructor(first_name, last_name, email, password) {
        this.id = ++User.id
        this.first_name = first_name
        this.last_name = last_name
        this.full_name = `${this.first_name} ${this.last_name}`

        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

        if (emailRegex.exec(email)) {
            this.email = email.toLowerCase()
        } else {
            throw new Error('Invalid email')
        }

        if (password.length < 6) {
            throw new Error('Password must have at least 6 characters')
        } else {
            this.password = password
        }
    }

    logIn(email, password, loginFeedback) {
        let result;
        if (this.email === email.toLowerCase() && this.password === password) {
            //processos de login
            loginFeedback(true)
        } else {
            loginFeedback(false)
        }
    }

    logOff() {
        //processos de logout
    }
}

class Administrator extends User {
    manageSystem() {
        //processos de gerenciamento do sistema
    }
}

class Moderator extends User {
    manageSystem() {
    }
}

class Student extends User {
    constructor(first_name, last_name, email, password, institution) {
        super(first_name, last_name, email, password)
        this.institution = institution
    }

    interactInForum() {
    }
}

export {
    User,
    Administrator,
    Moderator,
    Student
}