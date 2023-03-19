function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigh = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;
    
    let totalVolumeInCm = length * width * heigh;
    let totalVolumeInL = totalVolumeInCm / 1000;

    let volumeTaken = percentTaken * totalVolumeInL;

    let volumeLeft = totalVolumeInL - volumeTaken;

    console.log(volumeLeft);

}

fishTank(["85","75","47","17"]);
fishTank(["105","77","89","18.5"]);