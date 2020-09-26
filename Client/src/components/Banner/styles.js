import styled from 'styled-components'
import { maxWidth } from '@styles/variables'

export const Section = styled.section`
  background-color: #131218;
  width: 100%;
  text-align: center;
  height: 96vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  h1{
    color: #fff;
    font-size: 2em;
    margin-bottom: 40px;
  }
  article{
    max-width: ${maxWidth};
    padding: 50px 0px 0px;
    img{
      width: 100%;
      object-fit: cover !important;
    }
  }
`