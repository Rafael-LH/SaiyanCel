import styled from 'styled-components'
import { maxWidth } from '@styles/variables'

export const Container = styled.div`
  max-width: ${maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  section{
    p{
      font-size: 1.2em;
      text-align: center;
      line-height: 30px;
    }
    img{
      width: 100%;
    }
  }
`