console.log("logan");

let candies = ['https://storage.googleapis.com/images-bks-prd-1385851.bks.prd.v8.commerce.mi9cloud.com/product-images/detail/6585e64c-f40a-4270-95c0-0a89e0cc6ea9.jpeg', "https://www.frankfordcandy.com/cdn/shop/files/10965SPWatermelonMarshmallowBagUnitFront.jpg?v=1687881985&width=1946","https://shop.hersheys.com/on/demandware.static/-/Sites-master-us/default/dw9989342a/images/hi-res/034000002290_1.jpg", "https://pics.walgreens.com/prodimg/581330/450.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMvGpYUyoTDQQ3OWSA-R2TPJj6_ZDwWQg4A&s"];


function pressed(){
    let image = document.getElementById('image');
    const randomItem = candies[Math.floor(Math.random() * candies.length)];
    image.src = randomItem;
}