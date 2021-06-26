// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
//  чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
/**/
function comparisonNumbers(num1, num2) {
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
    if (num1 === num2) return 0;
}
console.log(comparisonNumbers(32, 32));

// Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(length) {
    let factorialNumber = 1;
    for (let i = 2; i <= length; i++) {
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber;
}
console.log(factorial(14));
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
//  Например: цифры 1, 4, 9 превратятся в число 149.

function transformeOfNumber(firstNum, secondNum, thirdNum) {
    return firstNum * 100 + secondNum * 10 + thirdNum;
}
console.log(transformeOfNumber(3, 6, 4));
// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//  Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function area(length, width) {
    let area;
    if (width === undefined || length === undefined) area = length * length;
    else area = length * width;
    return area;
}
console.log(area(45, 324));
// Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//  Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++)
        if (num % i === 0) sum += i;
    if (sum === num) return true;
    else return false;
}

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными.
//   Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function listPerfectNumber(number) {
    if ((number === 6) || (number === 28) || (number === 496) || (number === 8128) ||
        (number === 33550336) || (number === 8589869056) || (number === 137438691328) ||
        (number === 2305843008139952128)) return true;
    // (number === 2658455991569831744654692615953842176) || (number === 191561942608236107294793378084303638130997321548169216) слишком большые, и не потойдут.
}

function perfectNumberDiapason(num1, num2) {
    let beginDiapason = num1;
    let endDiapason = num2;
    if (num1 > num2) {
        beginDiapason = num2;
        endDiapason = num1;
    }
    if (beginDiapason % 2) beginDiapason++
    for (let i = beginDiapason; i <= endDiapason; i += 2)
        if (perfectNumber(i)) console.log(`Совершеное число: ${i}`);
}
perfectNumberDiapason(3, 64854);
// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на 
// экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function watch(hour, minutes, seconds) {
    if (hour === undefined) hour = 0;
    if (minutes === undefined) minutes = 0;
    if (seconds === undefined) seconds = 0;
    let h = hour % 24;
    let m = minutes % 60;
    let s = seconds % 60;
    let result;
    if (h < 10) {
        h = 0 + String(h);
    }
    if (m < 10) {
        m = 0 + String(m);
    }
    if (s < 10) {
        s = 0 + String(s);
    }
    return result = h + ':' + m + ':' + s;
}
console.log(watch());
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function allInSeconds(hour, minutes, seconds) {
    let messageSeconds = hour * 3600 + minutes % 60 * 60 + seconds % 60;
    return messageSeconds;
}

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и
//  секунды и возвращает в виде строки «чч:мм:сс».

function secondsInAnother(seconds) {
    let h = ~~(seconds / 3600);
    let m = ~~((seconds - h * 3600) / 60);
    let s = (seconds - h * 3600 - m * 60);
    let result;
    if (h < 10) {
        h = 0 + String(h);
    }
    if (m < 10) {
        m = 0 + String(m);
    }
    if (s < 10) {
        s = 0 + String(s);
    }
    result = watch(h, m, s);
    return result;
}

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров,
//  которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
//   При выполнении задания используйте функции из предыдущих 2-х заданий: сначала
//    обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function distinctionDate(hour1, minutes1, second1, hour2, minutes2, second2) {
    let sumSeconds1 = allInSeconds(hour1, minutes1, second1);
    let sumSeconds2 = allInSeconds(hour2, minutes2, second2);
    let distinctionSeconds = sumSeconds1 - sumSeconds2;
    return secondsInAnother(distinctionSeconds);
}
console.log(distinctionDate(23, 45, 34, 20, 43, 59));
