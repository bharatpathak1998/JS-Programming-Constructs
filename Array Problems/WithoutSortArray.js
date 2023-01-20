let randomArr = [];
let n = 10;

for (i = 0; i < n; i++) {
    let randomNum = (Math.floor(Math.random() * 1000) % 999);
    randomArr.push(randomNum);
}

let min = randomArr[0];
let max = randomArr[0];

for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] < min) {
        min = randomArr[i];
    }

    if (randomArr[i] > max) {
        max = randomArr[i];
    }
}

let minSecond = randomArr[0];
let maxSecond = randomArr[0];

for (let j = 0; j < randomArr.length; j++) {
    if (randomArr[j] < minSecond && min !== randomArr[j]) {
        minSecond = randomArr[j];
    }

    if (randomArr[j] > maxSecond && max !== randomArr[j]) {
        maxSecond = randomArr[j];
    }
}

console.log("Array Elements : " + randomArr + "\nSecond Largest Number : " + maxSecond +
    "\nSecond Smallest Element : " + minSecond);