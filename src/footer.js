import { createNewElement, addClass, addTextContent } from './functions.js'

const createFooter = () => {
  const footer = createNewElement('footer')
  addClass(footer, 'footer-section')

  const text = createNewElement('p')
  addTextContent(text, 'Made by Victoria')

  const fontAwesome = createNewElement('i')
  addClass(fontAwesome, 'fab')
  addClass(fontAwesome, 'fa-github')

  const link = createNewElement('a')
  link.href = 'https://github.com/victoriacheng15'

  link.appendChild(fontAwesome)
  text.appendChild(link)
  footer.appendChild(text)

  return footer
}

export { createFooter }
