import React, { useState } from 'react'
import searchForCharacters from '../service/searchCharacters';
import Cards from './Cards';
import './style.css'

export default function InputSearh() {
    const [form, setForm] = useState({
        searchTerms: ''
    });

    const [resultsData, setResulst] = useState([])

    const handleClick = async () => {
        const { searchTerms } = form;
        const { data: { results } } = await searchForCharacters(searchTerms);
        setResulst(results)
        setForm({ searchTerms: ''})
    }

  return (
    <>
    <div className='input-items'>
    <input type="text" onChange={ ({target}) => setForm({ searchTerms: target.value })}/>
    <button type='button' onClick={handleClick}>Pesquisar pesonagem</button>
    </div>
    <div>
      <Cards  data={resultsData}/>
    </div>
    </>
  )
}
