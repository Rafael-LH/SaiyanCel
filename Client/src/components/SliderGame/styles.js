import styled from 'styled-components'

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
`
export const Img = styled.img`
 max-width: 200px;
`
export const H1 = styled.h1`
  width: 100%;
  text-align: center;
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