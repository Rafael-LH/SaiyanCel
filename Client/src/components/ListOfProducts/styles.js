import styled from 'styled-components'
import { maxWidth, maxSizeH1 } from '@styles/variables'

export const Section = styled.section`
  max-width: ${maxWidth};
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  article{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 30%;
    margin-bottom: 50px;
    figure{
      text-align: center;
      img{
        width: 80%;
      }
    }
    p{
      width: 100%;
      text-align: center;
      margin: 0px 0px 5px;
      &:nth-child(odd) {
        color: #929292;
        text-decoration-line: line-through;
      }
    }
  }
`
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: ${maxSizeH1};
  margin-bottom: 80px;
`