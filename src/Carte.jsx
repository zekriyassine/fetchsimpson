import React from 'react'

const Carte = ({description}) =>{
    return (
        <div>
             <img  src={description.image} alt='test'></img>
            <ul>
                <li> Quote :{description.quote}</li>
                <li> Character :{description.character}</li>
                <li>Description :{description.characterDirection}</li>
            </ul>

        </div>

    )
}

export default Carte;
