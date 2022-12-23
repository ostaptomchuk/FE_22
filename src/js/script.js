// Minimal
// 1. Напиши всі можливі варіанти створення функцій.
// 1.1 Оголошення функції: ключове слово function, після чого назва з необов'язковими параметрами і фігурні дужки,
// в котрих буде код створеної ф-ї.
function helloWorld() {
    alert("hello world!")
}

helloWorld();

// 1.2 Функціональний вираз: оголошується змінна(константа) якій явно присвоюється змінна.
let expHelloWorld = function () {
    alert("this is Hello world with using functional expression")
}

expHelloWorld();

// 1.3 Лінійні функції: підвид функціональних виразів, проте, опускається ключове слово "function" i додається спеціальна конструкція "=>".
let arrowHelloWorld = () => { alert("This is arrow function") }

arrowHelloWorld();

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function funcArg(num, two) {
    alert(`Number of arguments is ${funcArg.length}`);
}

funcArg();

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function twoNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0
    }
}

alert(twoNumbers(6, 2))


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(9));

//  5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
//  Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function concat(num1, num2, num3) {
    return Number(String(num1) + String(num2) + String(num3));
}

alert(concat(1, 4, 7))

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function rectNSquare(side1, side2) {
    if (rectNSquare.arguments.length == 1) {
        return (side1 * 4);
    } else {
        return (side1 * side2);
    }
}


alert(rectNSquare(4, 2))


// Good
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfect(number) {
    let tempNumber = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            tempNumber += i;
        }
    }

    if (tempNumber === number && tempNumber !== 0) {
        alert("Це ідеальне число");
    }
    else {
        alert("Це число не є ідеальним");
    }
}

isPerfect(32);

