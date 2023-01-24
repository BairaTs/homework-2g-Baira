import name from "./name.json" assert {type: 'json'};
let currentUser = prompt('Как тебя зовут?');
let password = +prompt('Введи пароль');

if  (name[currentUser] !== undefined && name[currentUser] == password) {
   alert('Вы вошли')
} else if (name[currentUser]== undefined) {
    alert ('Такого пользователя не существует')
} else if (password !=name[currentUser] || password == "" || password == null) {
    alert ('Неверный пароль')
} 
