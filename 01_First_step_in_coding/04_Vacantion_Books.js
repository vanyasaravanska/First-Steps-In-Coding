function vacationBooks(input) {
    let totalPages = Number(input[0]); //212
    let pagesPerHour = Number(input[1]); //20
    let dataNumbers = Number(input[2]); //2

    let hoursPerDay = (totalPages / pagesPerHour) / dataNumbers

    console.log(hoursPerDay);
}
vacationBooks(["212","20","2"]);
vacationBooks(["432","15","4"]);
