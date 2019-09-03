// const ADMIN_PASSWORD = 'jqueryismyjam';
 const ADMIN_PASSWORD = '123';

let message = prompt('Введите пароль');

switch (message) {
    case null:
        message = 'Отменено пользователем!';
        break;

    case ADMIN_PASSWORD:
        message = 'Добро пожаловать!';
        break;

    default:
        message = 'Доступ запрещен, неверный пароль!';
        break;
}
alert(message);
