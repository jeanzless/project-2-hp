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
       {character.species && <p><strong>Species:</strong> {character.species}</p>}
       {character.gender && <p><strong>Gender:</strong> {character.gender}</p>}
       {character.ancestry && <p><strong>Ancestry:</strong> {character.ancestry}</p>}
       {character.ancestry && <p><strong>Ancestry:</strong> {character.ancestry}</p>}
       {character.patronus && <p><strong>Patronus:</strong> {character.patronus}</p>}
       {character.wand.core && <p><strong>Wand Core:</strong> {character.wand.core}</p>} 
      </h2>
      </div>
      <p id="back"><Link to="/characters">{"⬅ Back to all characters"}</Link></p>
      {/* <CharacterCard {...CharacterCard} /> */}
    </div>
  </section>
}

export default ShowCharacter


