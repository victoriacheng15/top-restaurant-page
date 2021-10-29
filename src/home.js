import { createNewElement, addId, addClass, addTextContent } from './functions.js'
import Image from './sandra-seitamaa-OFJGlG3sKik-unsplash.jpg'

const createHomePage = () => {
  const homeSection = createNewElement('section')
  addId(homeSection, 'home')
  addClass(homeSection, 'home-section')

  const imageDiv = createNewElement('div')
  addClass(imageDiv, 'image-box')
  addClass(imageDiv, 'container')

  const homeImage = createNewElement('img')
  homeImage.src = Image
  imageDiv.appendChild(homeImage)

  const homeText = createNewElement('p')
  addTextContent(homeText, 'Make your order online or come visit us!')

  homeSection.appendChild(imageDiv)
  homeSection.appendChild(homeText)
  return homeSection
}

export { createHomePage }
