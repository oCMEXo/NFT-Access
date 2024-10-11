import Users from './db/users.json'

export function setTimeout() {
    document.getElementById('loginForm')!.addEventListener('submit', function (event: Event) {
        const inputs = document.querySelectorAll('input');
        let allValid = true;

        inputs.forEach((input: HTMLInputElement) => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                allValid = false;
            }
        });

        if (!allValid) {
            event.preventDefault();
        }
    });

    function postUser(email: string, password: string): boolean {
        interface User {
            username?: string;
            email: string;
            password: string;
        }

        interface UserData {
            Users: User[];
        }

        const typedUserData = Users as UserData;

        const user = typedUserData.Users.find(user =>
            (user.email === email || user.username === email) && user.password === password
        );
        return user !== undefined;
    }

    const form = document.getElementById('loginForm') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('email') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;

        const email = emailInput.value;
        const password = passwordInput.value;

        const isValid = postUser(email, password);

        if (isValid) {
            alert('Вход успешно совершен');
            console.log({code: 200, data: 'Success'})

        } else {
            alert('Ошибка в вводе данных')
            console.error({code: 401, data: 'Invalid email or password'});

        }
    });
}
