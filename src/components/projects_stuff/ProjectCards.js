import React from 'react'
import CardItem from './CardItem'
import './ProjectCards.css'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
                src="images/img-9.jpg"
                text="A fun, interactive game! The aim of the game is to capture
                more discs than your opponent. There are options for grid types as
                well as single-player and two-player modes. Click for the source code."
                    label="Reversi"
                    path="https://github.com/makariosm/Reversi"
                />
              <CardItem 
                src="images/img-9.jpg"
                text="A spin-off of the classic Solitaire game! For the default game-mode the
                same rules apply as for normal Solitaire. However, there are other versions of the
                game available with different sets of rules. Click for the source code."
                    label="Klondike"
                    path="https://github.com/makariosm/Klondike"
                />
              <CardItem 
                src="images/img-9.jpg"
                text="Click to find the source code for the website
                you're currently viewing!"
                    label="Personal Website"
                    path="/"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
