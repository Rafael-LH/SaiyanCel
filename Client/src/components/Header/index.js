import React from 'react'
import { Link } from 'react-router-dom'
import { Header as HeaderStyled } from './styles'


const Header = () => {
  const categories = [
    {
      name: 'Mac',
      id: 1
    },
    {
      name: 'Ipad',
      id: 2
    },
    {
      name: 'Iphone',
      id: 3
    },
    {
      name: 'Whatch',
      id: 4
    }
  ]
  return (
    <HeaderStyled>
      <nav>
        <ul>
          {
            categories.map((item, index) => (
              <li key={index}>
                <Link to={`/category/${item.id}`}> {item.name} </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </HeaderStyled>
  )
}
export default Header 