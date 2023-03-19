function suppliesForSchool(input){
    let pencilsQuantity = Number(input[0]);
    let markerQuantity = Number(input[1]);
    let preparatL = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pencilsPrice = pencilsQuantity * 5.80;
    let markersPrice = markerQuantity * 7.20;
    let preparatPrice = preparatL * 1.20;

    let totalMaterialPrice = pencilsPrice + markersPrice + preparatPrice;
    let totalMaterialPriceDiscout = totalMaterialPrice - (totalMaterialPrice * 0.25)
    console.log(totalMaterialPriceDiscout);

}
suppliesForSchool(["2","3","4","25"])