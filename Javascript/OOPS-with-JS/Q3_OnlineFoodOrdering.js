// Q3 Online Food Ordering
let menu={ burger:80, pizza:200, momos:60 };

function calculateBill(orderItems){
    try{
        let prices=orderItems.map(item=>{
            if(!menu[item]) throw new Error("Invalid item: "+item);
            return menu[item];
        });
        return prices.reduce((a,b)=>a+b,0);
    }catch(e){ console.error("Error:",e.message); }
}

console.log("Bill:",calculateBill(["burger","momos"]));
calculateBill(["pizza","invalidItem"]);
