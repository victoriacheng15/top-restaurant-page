/* eslint-disable no-return-assign */
import { createNewElement, addClass, addTextContent } from './functions.js'

const createNav = () => {
  const navArray = ['home', 'menu', 'contact']
  const nav = createNewElement('nav')
  const ul = createNewElement('ul')
  nav.appendChild(ul)
  // eslint-disable-next-line array-callback-return
  navArray.map(nav => {
    const li = createNewElement('li')
    const a = createNewElement('a')
    a.href = `#${nav}`
    addTextContent(a, nav)
    li.appendChild(a)
    ul.appendChild(li)
  })

  return nav
}

const createHeader = () => {
  const header = createNewElement('header')
  addClass(header, 'container')

  const restaurantName = createNewElement('h1')
  addClass(restaurantName, 'restaurant-name')
  addTextContent(restaurantName, 'the food place')

  header.appendChild(restaurantName)
  header.appendChild(createNav())

  return header
}

export { createHeader }
