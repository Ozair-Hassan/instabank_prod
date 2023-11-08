import React, { useEffect } from 'react'
import styles from './styles'
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from './components'
import Contact from './components/Contact'

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.add('scrolling')

      // Remove 'scrolling' class after 1 second of no scrolling
      clearTimeout(document.body.scrollTimeout)
      document.body.scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling')
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(document.body.scrollTimeout)
    }
  }, [])

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
          <Clients /> <CTA /> <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default App
