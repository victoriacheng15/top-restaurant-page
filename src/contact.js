import { createNewElement, addId, addClass, addTextContent } from './functions.js'

const imageLink = 'https://source.unsplash.com/daily?food'

const createContactSection = () => {
  const contactSection = createNewElement('section')
  addId(contactSection, 'contact us')
  addClass(contactSection, 'contact-section')

  const contactTitle = createNewElement('h2')
  addTextContent(contactTitle, 'contact us')

  const contactDiv = createNewElement('div')
  addClass(contactDiv, 'container')

  const address = createNewElement('p')
  addTextContent(address, '123 Fake Street, XYZ City')

  const phoneNumber = createNewElement('p')
  addTextContent(phoneNumber, '123-456-7890')

  const image = createNewElement('img')
  image.src = imageLink
  image.alt = 'Map of the resturant'

  const contactDivLists = [address, phoneNumber, image]
  contactDivLists.map(contactDivList => contactDiv.appendChild(contactDivList))

  const lists = [contactTitle, contactDiv]
  lists.map(list => contactSection.appendChild(list))

  return contactSection
}
export { createContactSection }
