let currentUser = prompt('Как тебя зовут?');
let password = +prompt('Введи пароль');

if  (currentUser == 'root' && password == 123) {
   alert('Вы вошли')
} else if (currentUser== "" || currentUser != 'root') {
    alert ('Такого пользователя не существует')
} else if (password !=123 || password == "" ) {
    alert ('Неверный пароль')
} 




