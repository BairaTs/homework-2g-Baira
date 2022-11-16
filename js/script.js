let vopros="Как твои дела?";
const myName = "Баира";
const myHome = "живу в Ясногорске";
const profession = "инженер по охране труда";
let now = new Date();
const birthday = new Date(1995, 7, 26); 
let strStore = `Меня зовут ${myName}? по профессии я ${profession}, в данный момент. Мне ${now.getFullYear - birthday.getFullYear} лет. ${vopros}`
console.log(strStore)