const form = {
    email: document.getElementById('email'),  // используем объект document чтобы получить HTML элемент со страницы по его айди
    password: document.getElementById('password'),
    button: document.querySelector('.button'), // querySelector позволяет по селектору достучаться до элемента
}

// Условное ветвление через функцию

function handleInput(e, name) {
        const { value } = e.target
        if (value) {
            form[name].classList.add('filled')
        } else {
            form[name].classList.remove('filled')
        }
    }


form.email.oninput = (e) => handleInput(e, 'email')

form.password.oninput = (e) => handleInput(e, 'password')

// Условное ветвление

// form.password.oninput = (e) => {
//     const { value } = e.target
//     if (value) {
//         form.password.classList.add('filled')
//     } else {
//         form.password.classList.remove('filled')
//     }
// }