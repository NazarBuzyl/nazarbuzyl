"use strict";

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
var car = {
  producer: 'Audi',
  model: 'R8',
  year: 2018,
  averageSpeed: 170
};

function getCarInfo(object) {
  console.log("This is ".concat(object.producer, " model ").concat(object.model, " and year of issue ").concat(object.year, ". Average speed is ").concat(object.averageSpeed, "."));
}

function timeInRoad(averageSpeed, roadLenght) {
  var time = roadLenght / averageSpeed;
  return time + ~~(time / 4) + ' hour';
}

console.log(getCarInfo(car));
console.log(timeInRoad(car.averageSpeed, 700));
console.log(car); // 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

var commonFractions1 = {
  numerator: 21,
  denominator: 4
};
var commonFractions2 = {
  numerator: 6,
  denominator: 24
};
console.log(sumFractions(commonFractions1, commonFractions2));
console.log(subtractionFractions(commonFractions1, commonFractions2));
console.log(multiplicationFractions(commonFractions1, commonFractions2));
console.log(divisionFractions(commonFractions1, commonFractions2));

function sumFractions(fraction1, fraction2) {
  if (!fraction2) return;
  var messageFraction = {
    numerator: fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator,
    denominator: fraction1.denominator * fraction2.denominator
  };
  return messageFraction;
}

function subtractionFractions(fraction1, fraction2) {
  if (!fraction2) return;
  var messageFraction = {
    numerator: fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator,
    denominator: fraction1.denominator * fraction2.denominator
  };
  return messageFraction;
}

function multiplicationFractions(fraction1, fraction2) {
  if (!fraction2) return;
  var messageFraction = {
    numerator: fraction1.numerator * fraction2.numerator,
    denominator: fraction1.denominator * fraction2.denominator
  };
  return messageFraction;
}

function divisionFractions(fraction1, fraction2) {
  if (!fraction2) return;
  var messageFraction = {
    numerator: fraction1.numerator * fraction2.denominator,
    denominator: fraction1.denominator * fraction2.numerator
  };
  return messageFraction;
}

function simplificationOfFractions(fraction) {
  if (!fraction) return;
  var fractionRes = fraction;

  for (var i = Math.ceil(Math.max(fractionRes.numerator, fractionRes.denominator) / 2); i > 0; i--) {
    if (fractionRes.numerator % i === 0 && fractionRes.denominator % i === 0) {
      fractionRes.numerator = fractionRes.numerator / i;
      fractionRes.denominator = fractionRes.denominator / i;
    }
  }

  return fractionRes;
} // 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, 
// может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».


var dateOne = {
  hour: 18,
  minutes: 23,
  seconds: 45
};
coutDate(dateOne);
console.log(plusSeconds(dateOne, 3671));
console.log(plusMinutes(dateOne, 457));
console.log(plusHour(dateOne, 3));

function coutDate(date) {
  if (!date) return;
  console.log("".concat(date.hour, ":").concat(date.minutes, ":").concat(date.seconds));
}

function plusSeconds(date, seconds) {
  if (!seconds) seconds = 0;
  if (!date) return;
  var dateRes = date;
  dateRes.seconds = (date.seconds + seconds) % 60;
  plusMinutes(dateRes, ~~((date.seconds + seconds - dateRes.seconds) / 60));
  return dateRes;
}

function plusMinutes(date, minutes) {
  if (!minutes) minutes = 0;
  if (!date) return;
  var dateRes = date;
  dateRes.minutes = (date.minutes + minutes) % 60;
  plusHour(dateRes, ~~((date.minutes + minutes - dateRes.minutes) / 60));
  return dateRes;
}

function plusHour(date, hour) {
  if (!hour) hour = 0;
  if (!date) return;
  var dateRes = date;
  dateRes.hour = (date.hour + hour) % 24;
  return dateRes;
}