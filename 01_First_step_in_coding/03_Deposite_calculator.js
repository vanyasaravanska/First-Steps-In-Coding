function depositCalculator(input) {
    let depositeAmount = Number(input[0]); //200
    let depositeMonths = Number(input[1]); //3
    let interestRate = Number(input[2])/100; //5.7

    let finalAmount = depositeAmount + depositeMonths * ((depositeAmount * interestRate)) / 12

    console.log(finalAmount);
}
    depositCalculator(["200","3","5.7"]);
    depositCalculator(["2350","6","7"]);


