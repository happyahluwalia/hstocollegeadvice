import Head from 'next/head'
import styles from '../styles/LandingPage.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Process from '../components/Process'
import FAQ from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HS to College Advice - Your Guide to College Success</title>
        <meta name="description" content="Expert advice and guidance for high school students navigating the college application process and beyond." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage