/* eslint-disable no-return-assign */
const createNewElement = (tag) => document.createElement(tag)
const addId = (element, idName) => element.id = idName
const addClass = (element, className) => element.classList.add(className)
const addTextContent = (element, text) => element.textContent = text

export { createNewElement, addId, addClass, addTextContent }
