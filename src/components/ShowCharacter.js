import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import CharacterCard from "./CharacterCard"

function ShowCharacter() {
  const location = useLocation() //this is going to fetch everything from characterCard.js
  const character = location.state.character
  return <section className="section">
    <div className="container">
      <div id="card">
      <h1>{character.name}</h1>
      <h2>
       {character.image && <p><img src={character.image}></img></p>}
       {character.species && <p>Species: {character.species}</p>}
       {character.gender && <p>Gender: {character.gender}</p>}
       {character.ancestry && <p>Ancestry: {character.ancestry}</p>}
       {character.ancestry && <p>Ancestry: {character.ancestry}</p>}
       {character.patronus && <p>Patronus: {character.patronus}</p>}
       {character.wand.core && <p>Wand Core: {character.wand.core}</p>} 
      </h2>
      </div>
      <Link to="/characters">{"⬅ Back to all characters"}</Link>
      <CharacterCard {...CharacterCard} />
    </div>
  </section>
}

export default ShowCharacter


