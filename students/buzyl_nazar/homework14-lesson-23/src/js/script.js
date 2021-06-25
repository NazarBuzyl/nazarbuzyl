// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

const startNum = +prompt('start of range');
const endNum = +prompt('end of range');
let sum = 0;
for (let i = startNum; i <= endNum; i++) {
    sum += i;
}
console.log(sum);

// Запросить 2 числа и найти только наибольший общий делитель.

const firstNumber = +prompt('write number one, pls');
const secondNumber = +prompt('write number two, pls');
if(!firstNumber || !secondNumber) console.log('Wrong!! Not correct');
let numberOne = 0;
let numberTwo = 0;
let res;
if (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber < secondNumber) {
        numberOne = secondNumber;
        numberTwo = firstNumber;
    } else {
        numberOne = firstNumber;
        numberTwo = secondNumber;
    }
    do {
        res = numberOne % numberTwo;
        numberOne = numberTwo;
        numberTwo = res;
    } while (res !== 0);
}
console.log(numberOne);
// Запросить у пользователя число и вывести все делители этого числа.

const numberDivider = +prompt('write number, pls');
let divisors = '';
for (let i = 1; i <= numberDivider / 2; i++) {
    if (numberDivider % i == 0) divisors = divisors + ' ' + i;
}
divisors = divisors + ' ' + numberDivider;
console.log(divisors);

// Определить количество цифр в введенном числе.

const numberNumeral = +prompt('write number, pls');
let resNumber = numberNumeral;
let quantity = 0;
while (resNumber > 0) {
    resNumber = ~~(resNumber / 10);
    quantity++;
}
console.log(quantity);

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
// отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let number1;
let positiveNumber = 0;
let negativeNumber = 0;
let quantityNull = 0;
let evenNumber = 0;
let oddNumber = 0;
for (let i = 0; i < 10; i++) {
    number1 = +prompt(`Give me number ${i+1}!`);
    if (number1 > 0) positiveNumber++;
    else if (number1 < 0) negativeNumber++;
    else quantityNull++;
    if (number1 % 2 === 0) evenNumber++;
    else oddNumber++;
}
console.log(positiveNumber, negativeNumber, quantityNull, evenNumber, oddNumber);

// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
// вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

let number2;
let number3;
let action;
let answer;
while (true) {
    number2 = +prompt('first number');
    number3 = +prompt('second number');
    action = prompt('action with them');
    if (action === '+') answer = number3 + number2;
    if (action === '-') answer = number3 - number2;
    if (action === '*') answer = number3 * number2;
    if (action === '/') answer = number3 / number2;
    console.log(answer);
    if (+prompt('Next - 0, Stop - 1')) break;
}

// Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

const shiftNumber = +prompt('Number pls');
const quantityShift = +prompt('How much shift numerals?');
let long = 0;
let shiftNumberRes = shiftNumber;
let shiftNumberChange = shiftNumber;
let numberLast = 0;
while (shiftNumberRes > 0) {
    long++;
    shiftNumberRes = Math.floor(shiftNumberRes / 10);
}
for (let i = 0; i < quantityShift; i++) {
    numberLast = shiftNumberChange;
    for (let j = 0; j < long - 1; j++) {
        numberLast = Math.floor(numberLast / 10);
    }
    shiftNumberChange = shiftNumberChange % Math.pow(10, long - 1) * 10 + numberLast;
}
console.log(shiftNumberChange, shiftNumber);

// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

const dayWeek = +prompt('What day of week?');
let changeDayWeek = dayWeek;
let check;
let messageDay;
do {
    switch (changeDayWeek) {
        case 1:
            messageDay = "Monday";
            break;
        case 2:
            messageDay = "Tuesday";
            break;
        case 3:
            messageDay = "Wednesday";
            break;
        case 4:
            messageDay = "Thursday";
            break;
        case 5:
            messageDay = "Friday";
            break;
        case 6:
            messageDay = "Saturday";
            break;
        case 7:
            messageDay = "Sunday";
            break;
        default:
            messageDay = "No correct";
    }
    console.log(messageDay);
    check = +prompt('Next day - 1; Stop - 0');
    if (changeDayWeek === 7) changeDayWeek = 1;
    else changeDayWeek++;
} while (check !== 0)

// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) console.log(`${i} * ${j} = ${i*j}`)
}

// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать 
// его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете 
// результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, 
// что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и 
// получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, 
// пока пользователь не выберет == N.

prompt("Введите число от 1 до 100");
let num1 = 100;
let num2 = 0;
let tmpNum = 0;
let message = '';
let isBreak = false;
while (true) {
    tmpNum = ~~((num1 + num2) / 2);
    message = prompt(`Your number ${tmpNum} yes: ==, bigger: >, small: <.`, '');
    switch (message) {
        case '==':
            isBreak = true;
            break;
        case '<':
            num1 = tmpNum;
            break;
        case '>':
            num2 = tmpNum;
            break;
    }
    if (isBreak) break;
}
