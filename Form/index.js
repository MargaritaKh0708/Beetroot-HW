
const URL = 'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';

// document.getElementById('js-submit').addEventListener('click', (event) => {
//     event.preventDefault()
//     const body = {
//         role: 2,
//         firstName: document.getElementById('js-firstName').value,
//         lastName: document.getElementById('js-lastName').value,
//         email: document.getElementById('js-email').value,
//         userName: document.getElementById('js-userName').value,
//         password: document.getElementById('js-password').value,
//         disabledSeasonAnimation: true,
//         language: 'eng'
//     }
//     console.log(body)
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(URL, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: headers,
//     }).then(response => {
//         if (response.ok)
//             return response.json()
//         else
//             return response.json().then(error => {
//                 console.error(error.message.en)
//                 throw new Error(error.message.en)
//             })
//     }).then(data => console.log('This is your data:', data))

// })



// //! Validation




const usersUrl = 'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration';

// const usersUrl = 'https://jsonplaceholder.typicode.com/users';

// //! Fetch

const errorMsgEmail = {
    "ua": "Під цим емейлом уже зареєстровано користувача",
    "ru": "Под этим емейлом уже зарегистрировано пользователя",
    "en": "A user is already registered under this email"
}

const errorMsgUserName =
{
    "ua": "Цей псевдонім уже зайнятий",
    "ru": "Этот псевдоним уже занят",
    "en": "This nickname is already taken"
}

document.getElementById('js-submit').addEventListener('click', event => {
    event.preventDefault()
    const inputedEmail = document.getElementById('js-email').value,
        inputedUserName = document.getElementById('js-userName').value,
        inputedFirstName = document.getElementById('js-firstName').value,
        inputedLastName = document.getElementById('js-lastName').value,
        inputedPassword = document.getElementById('js-password').value,
        body = {
            role: 2,
            firstName: inputedFirstName,
            lastName: inputedLastName,
            email: inputedEmail,
            username: inputedUserName,
            password: inputedPassword,
            disabledSeasonAnimation: true,
            language: 'eng'
        },
        headers = {
            'Content-Type': 'application/json',

        };
    if (inputedFirstName === '' || inputedUserName === '' || inputedLastName === '' || inputedPassword === '' || inputedEmail === '') {
        modalWindow('Please, put something in empty fields!')
    }

    fetch(usersUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),

    }).then(response => {
        if (response.ok)
            return response.json().then(data => {
                console.log('This is your data:', data)
                modalWindow('Thanks, ' + inputedFirstName + '! Registration completed successfully!')
                document.getElementById('js-modal-title').innerText = '✔';
                for (const item of document.querySelectorAll('input')) {
                    item.value = '';
                }

            })
        else
            return response.json().then(error => {
                const errorObject = JSON.stringify(error.message);

                if (errorObject === JSON.stringify(errorMsgEmail) || errorObject === JSON.stringify(errorMsgUserName)) {
                    if (errorObject.includes('email'))
                        document.getElementById('js-email').classList.add('error');
                    else
                        document.getElementById('js-userName').classList.add('error');

                    return modalWindow(error.message.en + '! Please, try againe!');
                }
            })
    }
    )
})


//! Password field eye

document.getElementById('js-eye').addEventListener('mousedown', () => {
    document.getElementById('js-password').setAttribute('type', 'text')
})

document.getElementById('js-eye').addEventListener('mouseup', () => {
    document.getElementById('js-password').setAttribute('type', 'password')
})


//* Modal window

const modalWindow = (errorMsg) => {
    const btns = document.querySelectorAll('*[data-modal-btn]')
    for (let i = 0; i < btns.length; i++) {
        const name = btns[i].getAttribute('data-modal-btn'),
            modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = "block"
        document.getElementById('js-modal-msg').innerText = `${errorMsg}`;
        const close = modal.querySelector('.close__modal-window');
        close.addEventListener('click', () => {
            modal.style.display = "none"
        }
        )
    }

    window.onclick = e => {
        if (e.target.hasAttribute('data-modal-window')) {
            const modals = document.querySelectorAll("*[data-modal-window]");
            for (let i = 0; i < modals.length; i++) {
                modals[i].style.display = 'none';
            }
        }
    }
}