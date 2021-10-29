/* eslint-disable array-callback-return */
import { createNewElement, addId, addClass, addTextContent } from './functions.js'

const menuList = [
  {
    name: 'Chicken Wings',
    description: 'Too cultivated use solicitude frequently',
    image: 'https://source.unsplash.com/daily?food',
    type: 'snack'
  },
  {
    name: 'Takoyaki (6pc)',
    description: 'Dashwood likewise up consider continue entrance ladyship oh',
    image: 'https://source.unsplash.com/daily?food',
    type: 'snack'
  },
  {
    name: 'Steak Poutine',
    description: 'Wrong guest given purse power is no',
    image: 'https://source.unsplash.com/daily?food',
    type: 'snack'
  },
  {
    name: 'The Classic Burger',
    description: 'Friendship to connection an am considered difficulty',
    image: 'https://source.unsplash.com/daily?food',
    type: 'burger'
  },
  {
    name: 'Vegan Burger',
    description: 'Country met pursuit lasting moments why calling certain the',
    image: 'https://source.unsplash.com/daily?food',
    type: 'burger'
  },
  {
    name: 'Steak Wrap',
    description: 'Middletons boisterous our way understood law',
    image: 'https://source.unsplash.com/daily?food',
    type: 'wrap'
  },
  {
    name: 'Chicken Wrap',
    description: 'Among state cease how and sight since shall',
    image: 'https://source.unsplash.com/daily?food',
    type: 'wrap'
  },
  {
    name: 'Turkey Wrap',
    description: 'Material did pleasure breeding our humanity she contempt had',
    image: 'https://source.unsplash.com/daily?food',
    type: 'wrap'
  },
  {
    name: 'Vanilla Milkshake',
    description: 'So ye really mutual no cousin piqued summer result',
    image: 'https://source.unsplash.com/daily?food',
    type: 'milkshake'
  },
  {
    name: 'Mango Milkshake',
    description: 'Contented get distrusts certainty nay are frankness concealed ham',
    image: 'https://source.unsplash.com/daily?food',
    type: 'milkshake'
  },
  {
    name: 'Chocolate Milkshake',
    description: 'On unaffected resolution on considered of',
    image: 'https://source.unsplash.com/daily?food',
    type: 'milkshake'
  },
  {
    name: 'Fine Cheesecake',
    description: 'No thought me husband or colonel forming effects',
    image: 'https://source.unsplash.com/daily?food',
    type: 'dessert'
  },
  {
    name: 'Oreo Cheesecake',
    description: 'End sitting shewing who saw besides son musical adapted',
    image: 'https://source.unsplash.com/daily?food',
    type: 'dessert'
  },
  {
    name: 'Fine Cheesecake',
    description: 'Contrasted interested eat alteration pianoforte sympathize was',
    image: 'https://source.unsplash.com/daily?food',
    type: 'dessert'
  }, {
    name: 'Banan Split Ice Cream',
    description: 'He families believed if no elegance interest surprise an',
    image: 'https://source.unsplash.com/daily?food',
    type: 'dessert'
  }
]

const menu = (foodType) => {
  const container = createNewElement('article')
  addClass(container, 'menu-container')

  const menuTitle = createNewElement('h3')
  addTextContent(menuTitle, `${foodType}`)

  container.appendChild(menuTitle)
  menuList
    .filter(type => type.type === `${foodType}`)
    .map(food => {
      const divContainer = createNewElement('div')
      addClass(divContainer, 'menu-card')

      const title = createNewElement('h4')
      addTextContent(title, food.name)

      const image = createNewElement('img')
      image.src = food.image
      image.alt = `${food.name}`

      const desc = createNewElement('p')
      addTextContent(desc, food.description)

      const divLists = [title, image, desc]
      divLists.map(divList => divContainer.appendChild(divList))
      container.appendChild(divContainer)
    })

  return container
}

const createMenuSection = () => {
  const menuSection = createNewElement('section')
  addId(menuSection, 'menu')
  addClass(menuSection, 'menu-section')

  const menuTitle = createNewElement('h2')
  addTextContent(menuTitle, ' our menu')

  const menuContainer = createNewElement('div')
  addClass(menuContainer, 'container')

  menuSection.appendChild(menuTitle)
  menuSection.appendChild(menuContainer)

  const addMenuLists = [menu('snack'), menu('burger'), menu('wrap'), menu('milkshake'), menu('dessert')]
  addMenuLists.map(menuList => menuContainer.appendChild(menuList))

  return menuSection
}

export { createMenuSection }
