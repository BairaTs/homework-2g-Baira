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
    saySauce: 20,
    sugar: 7,
    vinegar: 30,
    dough: 50,
    onion: 4,
    noodles: 20,
    salt: 3,
}


let gabajou = {
    weight: 450,
    price: 500,
    ingredients: ['meat', 'carrot', 'ginger', 'cornstarch', 'soySauce', 'sugar', 'vinegar'],
    
};

let buuza = {
    weight: 90,
    price: 65,
    ingredients: ['dough', 'meat', 'onion'],
    
};

let soup = {
    weight: 350,
    price: 95,
    ingredients: ['meat', 'noodles', 'potato', 'salt'],
    
};


for (
    let i = 0;
    i < soup.ingredients.length;
    i ++
) {
    costPriceSoup += soup.ingredients[i];
}
let profitSoup = soup.price - costPriceSoup;
alert('Профит "cупа" ${profitSoup}');

for (
    let i = 0;
    i < buuza.ingredients.length;
    i ++
) {
    costPriceBuuza += buuza.ingredients[i];
}
let profitBuuza = buuza.price - costPriceBuuza;
alert('Профит "бууз" ${profitBuuza}');

for (
    let i = 0;
    i < gabajou.ingredients.length;
    i ++
) {
    costPriceGabajou += gabajou.ingredients[i];
}
let prifitGabajou = gabajou.price - costPriceGabajou;
alert('Профит габаджоу ${profitGabajou}');
