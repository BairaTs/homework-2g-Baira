for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        consol.log(i);
    }
} 

let i = 1;
while(true) {
    console.log(i);
    if (i === 5) {
        break;
    }
    i++
}

let costIngr = {
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
    
}

let buuza = {
    weight: 90,
    price: 65,
    ingredients: ['dough', 'meat', 'onion'],
    
}

let soup = {
    weight: 350,
    price: 95,
    ingredients: ['meat', 'noodles', 'potato', 'salt'],
    
}

let costPriceSoup = 0;
let profitSoup = 0;
for (let i = 0;
    i < soup.ingredients.length;
    i ++
) {
    costPriceSoup += costIngr[i];
}
    profitSoup = soup.price - costPriceSoup;
alert('Профит cупа' + profitSoup);

let costPriceBuuza = 0;
let profitBuuza = 0;
for (
    let i = 0;
    i < buuza.ingredients.length;
    i ++
) {
    costPriceBuuza += costIngr[i];
}
profitBuuza = buuza.price - costPriceBuuza;
alert('Профит буузы' +profitBuuza);

let costPriceGabajou = 0;
let profitGabajou = 0;
for (
    let i = 0;
    i < gabajou.ingredients.length;
    i ++
) {
    costPriceGabajou += costIngr[i];
}
     profitGabajou = gabajou.price - costPriceGabajou;
alert('Профит габаджоу' +profitGabajou);















