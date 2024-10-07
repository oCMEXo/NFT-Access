import users from './db/users.json';

interface User {
    email: string;
    password: string;
}

interface ApiResponse {
    code: number;
    data: string;
}

export function postUser(data: User): Promise<ApiResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Поиск пользователя в базе данных
            const user = users.find(user => user.email === data.email && user.password === data.password);

            if (user) {
                // Если пользователь найден, возвращаем успешный ответ
                resolve({ code: 200, data: 'Success' });
            } else {
                // Если пользователь не найден, возвращаем ошибку
                resolve({ code: 401, data: 'Invalid email or password' });
            }
        }, 1000); // Эмуляция задержки в 1 секунду
    });
}
