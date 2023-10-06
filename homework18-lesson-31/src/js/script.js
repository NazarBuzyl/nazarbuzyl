// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.

function createElem(options) {
    if (!options || !options.tagName) return;
    const tag = document.createElement(options.tagName);

    addClass(tag, options.classList)
    addAttributes(tag, options.attributes);
    addContent(tag, options.content);
    if (options.events) addEvents(tag, options.events)
    return tag;
}

function addEvents(node, events) {
    if (!node && !events) return;
    node.addEventListener(events.eventName, events.handler);
}

function addClass(node, classList) {
    if (!classList && !node) return;
    classList.split(' ').forEach(function (element) {
        node.classList.add(element);
    });
}

function addAttributes(node, options) {
    if (!options && !node) return;
    for (let key in options) {
        node.setAttribute(key, options[key])
    }
}

function addContent(node, content) {
    if (!content) return;

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (content.nodeType === 1) {
        node.append(content)
    } else if (Array.isArray(content)) {
        content.forEach(element => {
            addContent(node, element);
        });
    }
}

// export default createElem;
// export default addEvents;
// export default addClass;
// export default addAttributes;
// export default addContent;

// 1. Создать страницу, которая выводит нумерованный список песен:
let playList = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
}, {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
}, {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
}, {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
}, {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
}, {
    author: "AC/DC",
    song: "BACK IN BLACK"
}, {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
}, {
    author: "METALLICA",
    song: "ENTER SANDMAN"
}];

function getCreateList(arr) {
    let ol = createElem({
        tagName: 'ol',
        classList: 'playlist'
    });
    document.getElementById('app').append(ol);
    arr.forEach(function (item) {
        let li = createElem({
            tagName: 'li',
            classList: 'playlist__item',
            content: `${item.song}: ${item.author}.`,
        });
        document.getElementsByClassName('.playlist').append(li);
    });
    
}

getCreateList(playList);

// 2. Создать HTML - страницу с кнопкой "Открыть" и модальным окном.На модальном окне должен быть текст и кнопка
// "Закрыть".Изначально модальное окно не отображается.При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть"– исчезает.

// document.getElementById('btnOpen').addEventListener('click', function() {
//     document.getElementsByClassName('.modal').classList.add('active');
// // });
// const open = document.getElementById('btnOpen');
// open.addEventListener('click', openModal);

// function openModal() {
//     let modalWindow = document.getElementsByClassName('.modal');
//     modalWindow.classList.add('.active');
// }
// btnClose.onclick = function closeModal() {
//     let modalWindow = document.getElementsByClassName('.modal');
//     modalWindow.classList.remove('active');
// };


// document.getElementById('btnClose').addEventListener('click', 
// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

const colorList = [
    'red',
    'yellow',
    'green'
];
const circleList = [
    document.getElementsByClassName('red'),
    document.getElementsByClassName('yellow'),
    document.getElementsByClassName('green'),
]
let count = 0;
let countLight = 0;

function changeColor() {
    if (count === 3) {
        count = 1;
        countLight = 1;
    }
    if (count === -1) {
        count = 1;
        countLight = 0;
    }
    document.getElementById(colorList[count]).style.backgroundColor = colorList[count];

    if (!countLight && count !== 0) {
        document.getElementById(colorList[count - 1]).style.backgroundColor = "#fff";
        count++;
    }
    if (countLight) {
        document.getElementById(colorList[count + 1]).style.backgroundColor = "#fff";
        count -= 1;
    }
    if (!count && !countLight) count++;
}
document.getElementById('changeTrafficLight').addEventListener('click', changeColor);