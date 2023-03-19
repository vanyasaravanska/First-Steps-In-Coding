function foodDelivery(input){
    let chikenMenuQ = Number(input[0]);
    let fishMenuQ = Number(input[1]);
    let veganMenuQ = Number(input[2]);

    let chikenMenuPrice = chikenMenuQ * 10.35;
    let fishMenuPrice = fishMenuQ * 12.40;
    let veganMenuPrice = veganMenuQ * 8.15;

    let totalMenuPrice = chikenMenuPrice + fishMenuPrice + veganMenuPrice
    let desertPrice = totalMenuPrice * 0.20;
    let totalPrice = totalMenuPrice + desertPrice + 2.50;
    console.log(totalPrice);


}
foodDelivery(["2","4","3"])