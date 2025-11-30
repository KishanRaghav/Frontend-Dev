// Q7 E-Commerce Inventory System
let products=[
    {id:1,name:"Laptop",category:"Electronics",price:50000,stock:3},
    {id:2,name:"Mouse",category:"Electronics",price:500,stock:20},
    {id:3,name:"Shirt",category:"Clothes",price:800,stock:5},
    {id:4,name:"Shoes",category:"Clothes",price:1200,stock:1}
];

function getLowStockProducts(){ return products.filter(p=>p.stock<5); }
function sortProductsByPrice(){ return products.sort((a,b)=>a.price-b.price); }
function calculateTotalInventoryValue(){
    return products.reduce((sum,p)=>sum+(p.price*p.stock),0);
}
function groupByCategory(){
    return products.reduce((grp,p)=>{
        grp[p.category]=grp[p.category]||[];
        grp[p.category].push(p);
        return grp;
    },{});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
