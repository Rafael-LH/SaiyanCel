import React from 'react'
import { Link } from 'react-router-dom'
import { Header as HeaderStyled } from './styles'
import { useGetCategories } from '@hooks/Header/useGetCategories'

const Header = () => {
  const categories = useGetCategories()

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