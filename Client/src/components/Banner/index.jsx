import React from 'react'
import imageHero from '@images/hero_fallback.jpg'
import "./styles.scss"

const Banner = () => (
  <section className="container-banner">
    <article>
      <h1>La nueva MacBook Pro 2020</h1>
      <figure>
        <img src={imageHero} alt="Image Hero" />
      </figure>
    </article>
  </section>
)
export default Banner