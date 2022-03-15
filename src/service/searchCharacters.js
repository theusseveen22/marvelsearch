// import api from "./api";

const timestamp = '1647179337'
const hash = 'e6d55fe08e7bd3b835f7de1fb94242da'
const apikey = 'faee16d427b228302b6cb8e4fa303172'

const searchForCharacters = async (therms) => {
    const results = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${therms}&ts=${timestamp}&apikey=${apikey}&hash=${hash}&limit=15`)
    const character = await results.json();
    return character;
}

export default searchForCharacters;