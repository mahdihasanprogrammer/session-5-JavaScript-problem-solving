
function calcBill(prices, items){
    let itemCount ={};
    for(const item of items){
        
        if(item in itemCount){
            itemCount[item]+=1;
        }
        else{
            itemCount[item]=1;
        }
    }
    let total =0;
    for(const item in prices){
        const priceItem =prices[item];
        const quantityAndTotalPrice = priceItem * itemCount[item];
        total= total + quantityAndTotalPrice;
        
    }
    return {
        total,
        itemCount
    }
}

const prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
const items = ["egg", "egg", "rice", "oil", "egg", "sugar"];
console.log(calcBill(prices, items))