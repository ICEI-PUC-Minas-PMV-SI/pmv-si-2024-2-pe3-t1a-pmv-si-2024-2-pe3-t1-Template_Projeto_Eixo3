import { User } from '../js/resource-controllers'
const loginForm = document.getElementById(/*nome do form de login*/)

const signIn = async (email, password) => { //provavelmente o compilador vai reclamar pq n tem await na função ainda

    // criando user. Nesse caso, buscaríamos na base de dados o usuário com o email informado e compararíamos a senha informada com a senha do usuário encontrado.
    //algo como:
    /*
    const users = await fetchUsers(users_url)
    const logging_user = users.find(user => user.email === email)
    */
   
    const logging_user = new User("tes", "te", "tes.te@example.com", "senha123");

    document.getElementById(loginForm).addEventListener('submit',
        (submit) => {
            submit.preventDefault()

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            logging_user.logIn(email, password, 
                (login_suceeded) =>{
                if (login_suceeded) {
                    //processo login bem sucedido
                } else {
                    //processo login mal  sucedido
                }
            });
        })
}

export {
    signIn
}