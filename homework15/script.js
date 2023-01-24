import menu from "./menu.json" assert {type: 'json'};
import ingrCost from "../ingrCost.json" assert {type: 'json'};

console.log("Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует reduce.")
menu.forEach(function (element) {
    let costPrice = element.ingredients.reduce(function (sum, item) {
        return sum + ingrCost[item]
    }, 0)
    console.log(costPrice)
})

console.log("Запишите в каждое блюдо себестоимость, используя map и функцию из первого задания.")
let costSum = menu.map(function (menuItem) {
    let costPrice = menuItem.ingredients.reduce(function (sum, item) {
        return sum + ingrCost[item]
    }, 0)
    menuItem.cost = costPrice
    return menuItem
});
console.log(costSum)

console.log("Запишите в каждое блюдо себестоимость, используя map и функцию из первого задания. С помощью object.assign")
let costSumObj = menu.map(function (menuItem) {
    let costPrice = menuItem.ingredients.reduce(function (sum, item) {
        return sum + ingrCost[item]
    }, 0)
    let newMenuItem = Object.assign({}, menuItem);
    newMenuItem.cost = costPrice
    return newFoodItem
});
console.log(costSumObj)

console.log("Отфильтруйте меню по какой-то предельной стоимости (например блюда стоимостью менее 100 рублей).")

let foodLess = menu.filter(menuItem => menuItem.price <= 100)
console.log(foodLess);


console.log("Определите, есть ли в меню хоть одно вегетарианское блюдо, используя some.")

let vegFood = menu.some(function (menuElem) {
    console.log(menuElem.name)
    return menuElem.ingredients.every(function (foodIng) {
        console.log(foodIng);
        console.log(foodIng !== "meat" && foodIng !== "mutton");
        return (foodIng !== "meat" && foodIng !== "mutton");
    });
});

console.log(vegFood)

console.log("Определите, полностью ли у вас вегетарианское меню с помощью every. C помощью includes")

const NON_VEGAN_INGREDIENTS = ["meat", "mutton"]
let vegetIngFood = menu.some(function (menuElem) {
    console.log(menuElem.name);
    menuElem.ingredients.every(function (ingredient) {
        return !NON_VEGAN_INGREDIENTS.includes(ingredient)
    });
});
console.log(vegetIngFood)

console.log("Определите, полностью ли у вас вегетарианское меню с помощью every.")
let vegMenu = menu.every(function (menuItem) {
    console.log(menuItem.name)
    return menuItem.ingredients.every(function (foodIng) {
        console.log(foodIng);
        console.log(foodIng !== "meat" && foodIng !== "mutton");
        return (foodIng !== "meat" && foodIng !== "mutton");
    });
})
console.log(vegMenu)