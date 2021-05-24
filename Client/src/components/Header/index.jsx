import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCategories } from '@hooks/header/useGetCategories'
import "./styles.scss"

const Header = () => {
  const categories = useGetCategories()
  return (
    <header className="header-container">
      <nav>
        <ul>
          {
            categories.map((item, index) => (
              <li key={index}>
                <Link to={`/type/${item.type}`}> {item.name} </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header 