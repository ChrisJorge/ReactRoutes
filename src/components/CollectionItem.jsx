import React from 'react'

function CollectionItem(pokemon) {
  return (
    <div className='Card'>
        <h1>{pokemon.name}</h1>
    </div>
  )
}

export default CollectionItem