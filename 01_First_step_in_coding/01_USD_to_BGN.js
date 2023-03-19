function usdToBgn(input) { 
let usdToBgnExchangeRate = 1.7954;
let usd = Number(input[0]);
let bgn = usd * usdToBgnExchangeRate;

console.log(bgn);
}
 
usdToBgn(["22"]);
usdToBgn(["100"]);

