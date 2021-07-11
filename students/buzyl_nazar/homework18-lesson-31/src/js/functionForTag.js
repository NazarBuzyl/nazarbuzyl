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
    classList.split(' ').forEach(element => {
        node.classList.add(element)
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
