for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        consol.log( i );
    }
} 

let i = 1;
while(true) {
    console.log(i);
    if (i === 5) {
        break;
    }
    i++;
}

let costIngr= {
    weight: 100,
    meat: 20,
    carrot: 5,
    ginger: 7,
    cornstarch: 25,
    saySauce: 40,
    sugar: 7,
    vinegar: 30,
    dough: 80,
    onion: 4,
    noodles: 40,
    salt: 10,
}


let gabajou = {
    weight: 450,
    price: 500,
    ingredients: ['meat*2', 'carrot', 'ginger*0.3', 'cornstarch*0.7', 'soySauce*0.1', 'sugar*0.6', 'vinegar*0.05'],
    
};

let buuza = {
    weight: 90,
    price: 65,
    ingredients: ['dough*0.2', 'meat*0.8', 'onion*0.2'],
    
};

let soup = {
    weight: 350,
    price: 95,
    ingredients: ['meat', 'noodles', 'potato*0.5', 'salt*0.05'],
    
};


for (
    let i = 0;
    i < soup.ingredients.length;
    i ++
) {
    costPriceSoup += soup.ingredients[i]
}
let profitSoup = soup.price - costPriceSoup;
alert('Профит "cупа" ${profitSoup}');

for (
    let i = 0;
    i < buuza.ingredients.length;
    i ++
) {
    costPriceBuuza += buuza.ingredients[i]
}
let profitBuuza = buuza.price - costPriceBuuza;
alert('Профит "бууз" ${profitBuuza}');

for (
    let i = 0;
    i < gabajou.ingredients.length;
    i ++
) {
    costPriceGabajou += gabajou.ingredients[i]
}
let prifitGabajou = gabajou.price - costPriceGabajou;
alert('Профит габаджоу ${profitGabajou}');
