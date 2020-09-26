import styled from 'styled-components'
import { maxWidth } from '@styles/variables'

export const Article = styled.article`
  max-width: ${maxWidth};
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.75);
  padding: 5px 10px;
  margin-bottom: 50px;
`
export const H4 = styled.h4`
  border-bottom: 1px solid #dcd5d5;
  padding-bottom: 5px;
`
export const ContainerItems = styled.div`
  display: flex;
  overflow-x: scroll;
`
export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`
export const Img = styled.img`
 max-width: 200px;
`
export const P = styled.p`
  width: 100%;
  text-align: center;
  margin: 0px 0px 5px;
   &:nth-child(odd) {
    color: #929292;
    text-decoration-line: line-through;
  }
`