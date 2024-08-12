import React from 'react'

const Card = ({ character }) => {
    return (
        <div className='card'>
            <img  className="img_card" src={character.image} alt="" />
            <h1>{character.name}</h1> {/* Asumiendo que 'character' tiene una propiedad 'name' */}
        </div>
    )
}

export default Card;