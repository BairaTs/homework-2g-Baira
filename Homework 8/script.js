let gabajou = {
    weight: 450,
    price: 500,
    costPrise: 250,
    ingredients: ['pork meat', 'carrot', 'ginger', 'cornstarch', 'soy sauce', 'sugar', 'vinegar'],
    
};

let buuza = {
    weight: 90,
    price: 65,
    costPrise: 30,
    ingredients: ['dough', 'meat', 'mutton','onion'],
    
};

let soup = {
    weight: 350,
    price: 95,
    costPrise: 45,
    ingredients: ['meat', 'noodles', 'potato', 'salt'],
    
};

let food = [gabajou, soup, buuza];

food.splice(2,1); //delete buuza

alert(JSON.stringify(food));

let.removed = food.splice(2,1); 

alert(removed);//"buuza" массив из удаленного элемента

buuza.ingredients.splice(2, 1); //delete mutton

alert(buuza.ingredients);
food.unshift(buuza); //add buuza

alert(JSON.stringify(food));

let myPriсe = `All price = ${gabajou.price + buuza.price + soup.priсe}`;
alert(myPriсe);

let profitGabajou = gabajou.price-gabajou.costPrise;
let profitBuuza = buuza.price-buuza.costPrise;
let profitSoup = soup.price-soup.costPrise;

food.splice(0, 2); //delete all except buuza
alert(JSON.stringify(food)) 