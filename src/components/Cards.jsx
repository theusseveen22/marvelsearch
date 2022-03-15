import React, { useState } from 'react'
import CardCharacter from './CardCharacter'
import './style.css'

export default function Cards({ data }) {
  const [chacarter, setCharacter] = useState([])
  const handleClick = (id) => {
    const filterCharacter = data.filter((element) => element.id === id)
    setCharacter(filterCharacter);
  }
  const loadImage = 'Digite parte ou nome todo do personagem (Em inglês)'
  return (
    data.length > 0 ?
    <div className='card'>
    <div className='card-link-items'>
      {
        data.map((element) =>
          <h1 key={element.id} onClick={() => handleClick(element.id)}>
          {element.name}</h1>
        )
      } </div>
    <CardCharacter chacarterFiltered={chacarter}/>
    </div>
    
    : loadImage
  )
}
