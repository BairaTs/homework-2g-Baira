let salary = prompt('Сколько ты сейчас зарабатываешь');
if (salary <= 30000) {
    alert('Тебе пора подумать о дополнительном доходе, например в IT сфере. Поэтому рекомендую начать с обучения у Арсалана');
} else if (salary <= 60000) {
    alert('Неплохо, у тебя средняя зарплата по России');
} else if (salary <= 120000) {
    alert('Поздравляю, ты можешь себе позволить немного лишнего');
} else if (salary <= 500000) {
    alert('Отлчно, думаю многие хотели бы столько зарабатывать');
} else if (salary >= 500000) {
    alert('Ух ты, я тебе завидую');
}