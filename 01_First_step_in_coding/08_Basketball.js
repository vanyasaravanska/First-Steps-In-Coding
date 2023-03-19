// []{}

function basketballEquipment(input) {
    let annualTrainingFee = Number (input[0]); // 400
    // 160
    let priceDiffFeeSneakers = 0.4 * annualTrainingFee;
    let sneakersPrice = annualTrainingFee - 160;

    let priceDiffFeeSneakersOutfit = 0.2 * sneakersPrice;
    let outfitPrice = sneakersPrice - priceDiffFeeSneakersOutfit;

    let ballPrice = (1/4) * outfitPrice;
    let accesoriesPrice = (1/5) / ballPrice;

    let totalPrice = annualTrainingFee + sneakersPrice + outfitPrice + accesoriesPrice;
    console.log(totalPrice);

}
basketballEquipment(["365"]);