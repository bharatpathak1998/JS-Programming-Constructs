let i = 1;
while (i !== 0) {
    let powerOfTwo = Math.pow(2, i);
    console.log(powerOfTwo);
    if (powerOfTwo === 256) {
        break;
    }
    i++;
}