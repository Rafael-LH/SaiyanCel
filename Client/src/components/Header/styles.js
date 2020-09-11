import styled from 'styled-components'

const transition = '.4s';
export const Header = styled.header`
  width: 100%;
  background: rgba(0,0,0,0.8);
  nav{
     max-width: 1090px;
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