import styled from 'styled-components'
import { maxWidth } from '@styles/variables'
import { primaryColor } from '@styles/colors'

const transition = '.4s';
export const Header = styled.header`
  width: 100%;
  background: ${primaryColor};
  nav{
     max-width: ${maxWidth};
     margin: auto;
     ul{
       display: flex;
       justify-content: center;
       li{
          padding: 10px 20px;
          a{
            display: block;
            color: #dcd6d6;
            font-size: .9em;
            transition: ease ${transition};
            letter-spacing: 1px;
            &:hover{
              transition: ease ${transition};
              color: #fff;
            }
          }
        }
      }
    }
`