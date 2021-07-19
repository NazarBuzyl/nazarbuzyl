"use strict";

// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, 
// который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
var shoppingList = [{
  name: 'apple',
  qty: 24,
  buy: 'No'
}, {
  name: 'chocolate',
  qty: 32,
  buy: 'Yes'
}, {
  name: 'cucumber',
  qty: 17,
  buy: 'No'
}, {
  name: 'fish',
  qty: 3,
  buy: 'Yes'
}, {
  name: 'orange',
  qty: 1,
  buy: 'No'
}, {
  name: 'pineapple',
  qty: 4,
  buy: 'Yes'
}]; // Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

function showAllList(shopList) {
  var bought = [];
  var notBought = [];
  shopList.forEach(function (item) {
    if (item.buy === 'No') notBought.push(item);else if (item.buy === 'Yes') {
      bought.push(item);
    }
  });
  var result = [];
  result.push(notBought);
  result.push(bought);
  return result;
} // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.


function addPtoduct(shopList, productItem) {
  var check = false;
  shopList.forEach(function (item) {
    if (item.name.toLowerCase() === productItem.toLowerCase()) {
      item.qty++;
      check = true;
    }
  });
  if (!check) shopList.push({
    name: productItem,
    qty: 1,
    buy: 'No'
  });
} // Покупка продукта. Функция принимает название продукта и отмечает его как купленный.


function buyProduct(shopList, productName) {
  shopList.forEach(function (item) {
    if (item.name === productName) {
      item.buy = 'Yes';
    }

    ;
  });
}

buyProduct(shoppingList, 'orange');
addPtoduct(shoppingList, 'milk');
addPtoduct(shoppingList, 'Orange');
console.log(showAllList(shoppingList));
console.log(shoppingList); // 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции:

var checkList = [{
  name: 'apple',
  qty: 24,
  price: 80
}, {
  name: 'chocolate',
  qty: 32,
  price: 32
}, {
  name: 'cucumber',
  qty: 17,
  price: 46
}, {
  name: 'fish',
  qty: 3,
  price: 21
}, {
  name: 'orange',
  qty: 1,
  price: 58
}, {
  name: 'pineapple',
  qty: 4,
  price: 10
}]; // Распечатка чека на экран;

function shopAllCheck(boughtList) {
  boughtList.forEach(function (item) {
    console.log("\n        Product: ".concat(item.name, ".\n        Quantity: ").concat(item.qty, "x. One price: ").concat(item.price, ".\n        Price: ").concat(item.qty * item.price, " grn.\n        "));
  });
}

shopAllCheck(checkList); // Подсчет общей суммы покупки;

function getCountPrice(arr) {
  var result = 0;
  arr.forEach(function (item) {
    result += item.price * item.qty;
  });
  return result;
}

console.log(getCountPrice(checkList)); // Получение самой дорогой покупки в чеке;

function getMaxPriceInList(boughtList) {
  var maxPrice = 0;
  boughtList.forEach(function (item) {
    if (maxPrice < item.qty * item.price) maxPrice = item;
  });
  return maxPrice;
}

console.log(getMaxPriceInList(checkList)); // Подсчет средней стоимости одного товара в чеке.

function getAvergagePrice(list) {
  var countQuantity = 0;
  list.forEach(function (item) {
    countQuantity += item.qty;
  });
  return getCountPrice(list) / countQuantity;
}

console.log(getAvergagePrice(checkList)); // 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.

var arrStyle = [{
  name: 'color',
  value: 'blue'
}, {
  name: 'font-size',
  value: '18px'
}, {
  name: 'text-align',
  value: 'center'
}, {
  name: 'text-transform',
  value: 'uppercase'
}]; // Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью
// document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

function getTextWithStyle(arrCss, text) {
  if (!text) return;
  var p = document.createElement('p');
  p.textContent = text;
  var style = '';
  arrCss.forEach(function (item) {
    style += "".concat(item.name, ": ").concat(item.value, "; ");
  });
  p.setAttribute('style', style);
  var div = document.getElementById('div');
  div.prepend(p);
}

getTextWithStyle(arrStyle, 'hufq Ghbdtn vtyz!'); // 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, 
// количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

var auditoryList = [{
  title: '217',
  place: 17,
  faculty: 'BTF'
}, {
  title: '206',
  place: 16,
  faculty: 'BMF'
}, {
  title: '119a',
  place: 19,
  faculty: 'BMW'
}, {
  title: '117',
  place: 17,
  faculty: 'NTF'
}, {
  title: '320',
  place: 10,
  faculty: 'NFF'
}, {
  title: '320a',
  place: 14,
  faculty: 'BTF'
}]; // Вывод на экран всех аудиторий;

function showAllAuditory(list) {
  list.forEach(function (item) {
    console.log("Auditory: ".concat(item.title, "."));
  });
}

showAllAuditory(auditoryList); // Вывод на экран аудиторий для указанного факультета;

function getFindAuditory(faculty) {
  if (!faculty) return;
  var result = [];
  this.forEach(function (item) {
    if (item.faculty === faculty) result.push(item);
  });
  return result;
}

console.log(getFindAuditory.call(auditoryList, 'BTF')); // Вывод на экран только тех аудиторий, которые подходят для переданной группы. 

function searchPlaceForGroup(list, sizeGroup) {
  var result = [];
  list.forEach(function (item) {
    if (item.place >= sizeGroup) result.push(item);
  });
  return result;
}

console.log(searchPlaceForGroup(auditoryList, 11)); // Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;

function sortQtyPlace(arr) {
  var arrRes = arr;

  for (var i = 0; i < arrRes.length - 1; i++) {
    for (var j = 0; j < arrRes.length - 1 - i; j++) {
      if (arrRes[j].place > arrRes[j + 1].place) {
        var swap = arrRes[j];
        arrRes[j] = arrRes[j + 1];
        arrRes[j + 1] = swap;
      }
    }
  }

  return arrRes;
}

console.log(sortQtyPlace(auditoryList)); // Функция сортировки аудиторий по названию (по алфавиту).

function sortName(arr) {
  var arrRes = arr;

  for (var i = 0; i < arrRes.length - 1; i++) {
    for (var j = 0; j < arrRes.length - 1 - i; j++) {
      if (arrRes[j].faculty > arrRes[j + 1].faculty) {
        var swap = arrRes[j];
        arrRes[j] = arrRes[j + 1];
        arrRes[j + 1] = swap;
      }
    }
  }

  return arrRes;
}

console.log(sortName(auditoryList));