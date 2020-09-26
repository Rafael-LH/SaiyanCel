import React from 'react'
import { Article, ContainerItems, ContainerInfo, Img, P, H4 } from './styles'

const SliderGame = ({ style, sectionName, data }) => {
  return (
    <Article>
      <H4 style={style}>{sectionName}</H4>
      <ContainerItems>
        {
          data.map((item, index) => (
            <ContainerInfo key={index}>
              <figure>
                <Img src={item} alt="Product" />
              </figure>
              <b>
                <h1>Iphone 11 Pro</h1>
              </b>
              <P>Antes: $12500</P>
              <P>Ahora $9000</P>
            </ContainerInfo>
          ))
        }
      </ContainerItems>
    </Article>
  )
}
export default SliderGame