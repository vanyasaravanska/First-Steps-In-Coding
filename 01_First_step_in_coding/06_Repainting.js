function repainting(input)  {
    let naylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let workTime = Number(input[3]);

    let additionalPaintQuantity = 0.10 * paintQuantity;
    let totalPaintQuantity = paintQuantity + additionalPaintQuantity 
  
    let totalNaylonQuantity = naylonQuantity + 2;

    let naylonPrice = totalNaylonQuantity * 1.50;
    let paintPrice = totalPaintQuantity * 14.50;
    let thinnerPrice = thinnerQuantity * 5;

    let totalMaterialPrice = naylonPrice + paintPrice + thinnerPrice + 0.40;

    let wotkPricePerHour = 0.30 * totalMaterialPrice;
    let totalWorkPrice = workTime * wotkPricePerHour;

    let totalPrice = totalMaterialPrice + totalWorkPrice;
    console.log(totalPrice);

}

repainting(["5","10","10","1"]);

