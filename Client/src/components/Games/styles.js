import styled from 'styled-components'
import { maxSizeH1, maxWidth } from '@styles/variables'

export const Section = styled.section`
  max-width: ${maxWidth};
  margin: auto;
  margin-bottom: 20px;
  hgroup{
    margin-bottom: 50px;
    h1{
      font-size: ${maxSizeH1};
      text-align: center;
    }
    h3{
      text-align: center;
    }
  }
`