import React from 'react'
import './style.css'

export default function CardCharacter({chacarterFiltered}) {
  return (
    chacarterFiltered ?
    <div>
      {
        chacarterFiltered.map((element) =>
        <div key={element.id} className="ch-items">
        <h3><img src={element.thumbnail.path + '.' + element.thumbnail.extension} alt="thumbnail"/></h3>
        <h3>Nome: {element.name}</h3>
        <h3>História: {element.description}</h3>
        <h3>Séries que aparece: {element.series.items.map((item) => 
        <ul key={element.name}>
          <li>
            {item.name}
          </li>
        </ul>
        )}</h3>
        </div>
        )
      }
    </div>
    : <h1>...</h1>
  )
}
