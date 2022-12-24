let ingredientsCost = {
    meat: 20,
    carrot: 5,
    ginger: 7,
    cornstarch: 25,
    saySauce: 20,
    sugar: 7,
    vinegar: 30,
    dough: 50,
    onion: 4,
    noodles: 20,
    salt: 3,
};


let gabajou = {
    name: "gabajou",
    price: 500,
    ingredients: ['meat', 'carrot', 'ginger', 'cornstarch', 'soySauce', 'sugar', 'vinegar'],
    
};

let buuza = {
    name: "buuza",
    price: 65,
    ingredients: ['dough', 'meat', 'onion'],
    
};

let soup = {
    name: "soup",
    price: 95,
    ingredients: ['meat', 'noodles', 'potato', 'salt'],
    
};

let menuList = [
    gabajou,
    buuza,
    soup,
];

let wholeCost = 0;
for (let i = 0; i < menuList.length; i++) {
    let cost = 0;
    const ingredients = menuList[i].ingredients;

    for (let j = 0; j < ingredients.length; j++) {
        let ingredientName = ingredients[j];
        let ingredientCost = ingredientsCost[ingredientName];
        cost += ingredientCost;
    }

    menuList[i].cost = cost;
    alert(JSON.stringify(menuList[i]));
}















