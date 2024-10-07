const submitButton = document.querySelector<HTMLButtonElement>('#singup-sumbmit');

submitButton?.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    console.log("work");
});


// const form = document.getElementById('#loginForm') as HTMLFormElement; // Явно указываем, что это HTMLFormElement
//
// if (form) { // Проверяем, что форма существует
//     form.addEventListener('submit', (event: Event) => { // Указываем тип события
//         event.preventDefault(); // Предотвращаем отправку формы и переход на другой URL
//         console.log("Form submitted!");
//     });
// } else {
//     console.error('Форма не найдена!');
// }
