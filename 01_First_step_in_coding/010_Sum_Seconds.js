function sumSeconds(input){//["35", "45", "44"]
  let secondsFirst = Number(input[0]);
  let seconfsSecond = Number (input[1]);
  let secondsThird = Number (input[2]);

  let secondsSum = secondsFirst + seconfsSecond + secondsThird;

  let minutes = Math.floor(secondsSum / 60);
  let seconds = secondsSum % 60
  console.log(minutes)

}

sumSeconds(["35", "45", "44"]);