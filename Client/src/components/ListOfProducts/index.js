import React from 'react'
import { Section, Title } from './styles'

const ListOfProducts = ({ title = '', data }) => (
  <Section>
    <Title>{title || ''}</Title>
    {
      data.map((item, index) => (
        <article key={index}>
          <figure>
            <img src={item} alt="Product" />
          </figure>
          <b>
            <h1>Iphone 11 Pro</h1>
          </b>
          <p>Antes: $12500</p>
          <p>Ahora $9000</p>
        </article>
      ))
    }
  </Section>
)
export default ListOfProducts