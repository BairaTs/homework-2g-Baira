function min(a,b) {
if (a<b) {
return a;
} else {return b};
}
let a = prompt('введи любое число');
let b = prompt('еще одно');
let otvet = min(a,b);
alert('Минимальное число ' + otvet);
