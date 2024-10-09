import Users from './db/users.json'


export function setupButton() {

//     // Определение интерфейсов для типизации данных
//     interface User {
//         username?: string; // Опциональное свойство, если может быть отсутствует
//         email?: string;    // Опциональное свойство
//         password: string;  // Обязательное свойство
//     }
//
//     interface UserData {
//         Users: User[];
//     }
//
// // Приводим к типу UserData
//     const typedUserData = Users as UserData;
//
// // Функция для вывода пользователей
//     function printUsers(users: User[]) {
//         users.forEach(user => {
//             if (user.username) {
//                 console.log(`Username: ${user.username}, Password: ${user.password}`);
//             } else if (user.email) {
//                 console.log(`Email: ${user.email}, Password: ${user.password}`);
//             }
//         });
//     }
//
// // Вызов функции для вывода пользователей
//     printUsers(typedUserData.Users);


    function validateUser(email: string, password: string): boolean {
        interface User {
            username?: string; // Опциональное свойство, если может быть отсутствует
            email?: string;    // Опциональное свойство
            password: string;  // Обязательное свойство
        }

        interface UserData {
            Users: User[];
        }

        const typedUserData = Users as UserData;

        const user = typedUserData.Users.find(user =>
            (user.email === email || user.username === email) && user.password === password
        );
        return user !== undefined;
        // validateUser(email, password);
    }

// Получение формы и добавление обработчика события
const form = document.getElementById('loginForm') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    const isValid = validateUser(email, password);

    if (isValid) {
        alert('Вход успешно совершен');
        console.log({ code: 200, data: 'Success' })
        // Здесь можно перенаправить пользователя или выполнить другие действия
    } else {
        alert('Ошибка в вводе данных')
        console.log({ code: 401, data: 'Invalid email or password' });
    }
});


    // const form = document.getElementById('loginForm') as HTMLFormElement;
    // function setupSignInButton() {
    //     const emailInput = document.getElementById('email') as HTMLInputElement;
    //     const passwordInput = document.getElementById('password') as HTMLInputElement;
    //     const signInButton = document.getElementById('singSubmit') as HTMLButtonElement;
    //
    //     signInButton.addEventListener('click', (event: MouseEvent) => {
    //         event.preventDefault(); // Предотвращаем стандартное поведение формы
    //
    //         // Сброс рамки в случае предыдущих ошибок
    //         emailInput.style.border = '';
    //         passwordInput.style.border = '';
    //
    //         // Проверка на пустые поля
    //         let isValid = true; // Флаг для отслеживания валидности
    //
    //         if (!emailInput.value) {
    //             emailInput.style.border = '1px solid red'; // Тонкая красная рамка
    //             isValid = false; // Устанавливаем флаг в false
    //         }
    //
    //         if (!passwordInput.value) {
    //             passwordInput.style.border = '1px solid red'; // Тонкая красная рамка
    //             isValid = false; // Устанавливаем флаг в false
    //         }
    //
    //         // Если все поля заполнены, можно отправить данные (в данном случае просто логируем)
    //         if (isValid) {
    //             console.log('Form submitted successfully!');
    //             // Здесь вы можете выполнить дальнейшую логику, например, отправить данные на сервер
    //         }
    //     });
    // }

// Вызов функции для настройки кнопки
//     setupSignInButton();

}
