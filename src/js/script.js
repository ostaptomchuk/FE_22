let num1 = 0.1, num2 = 0.2;
let sumNum = alert(num1 + num2);

let stringNum1 = "1";
num2 = 2;
let sumStringToNum = alert(+stringNum1 + num2);

let flashCapacity = +prompt('Insert capacity of memory:', '8');
let convertedCapacity = flashCapacity*1024;
let countOfFiles = alert(`Your memory contains ${convertedCapacity/820} files`);

let cash = +prompt('How many cash in your wallet?');
let price = +prompt('CHoose price of one bar of chocolate:');
let chocolateQty = Math.trunc(cash/price);
let order = alert(`You choose a ${chocolateQty} chocolate (s), so your surplus is ${cash%price}`);

// 2 && 0 && 3  (0)

// 2 || 0 || 3  (2)

// 2 && 0 || 3  (3)