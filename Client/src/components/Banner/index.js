import React from 'react'
import imageHero from '@images/hero_fallback.jpg'
import { Section } from './styles'

const Banner = () => (
  <Section>
    <article>
      <h1>La nueva MacBook Pro 2020</h1>
      <figure>
        <img src={imageHero} alt="Image Hero" />
      </figure>
    </article>
  </Section>
)
export default Banner