import React from 'react'
import styles from '../styles/Hero.module.css'

const Footer: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h2>FOOTER:Your Path to College Success Starts Here</h2>
      <p>Expert guidance for high school students navigating the college application process</p>
      <button className={styles.cta}>Get Started</button>
    </section>
  )
}

export default Footer