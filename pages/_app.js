import '../styles/globals.css'
import './components/componentStyles/Title.css'
import './components/componentStyles/FIrstContent.css'
import './components/componentStyles/SecondContent.css'
import './components/componentStyles/break.css'
import './components/componentStyles/footer.css'
import './components/componentStyles/aboutMe.css'
import './components/componentStyles/projectsPage.css'
import './components/componentStyles/ContactForm.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { ReactElement } from 'react'

library.add(fab, faCoffee)







function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
