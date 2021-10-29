/* eslint-disable no-unused-vars */
import { createHeader } from './header.js'
import { createHomePage } from './home.js'
import { createMenuSection } from './menu.js'
import { createContactSection } from './contact'
import { createFooter } from './footer.js'

import './style.css'

const addToContent = (() => {
  const content = document.querySelector('#content')

  const ContentLists = [createHeader(), createHomePage(), createMenuSection(), createContactSection(), createFooter()]
  ContentLists.map(ContentList => content.appendChild(ContentList))
})()
