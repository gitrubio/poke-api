
import React from 'react'
import defaultImage from '../assets/defaultImage.png'

const CardPokeCharacters = ({ pokemones }) => {
    return (
        <div className='container d-flex flex-wrap'>
            <div className='row row-cols-1 row-cols-md-4 g-5 mt-2 mb-4'>
                {
                    pokemones.map((poke) => {
                        return <div key={poke.id} className="col">
                            <div className="p-4 container_card d-flex flex-wrap">
                                <h5>{poke.id}</h5>
                                <img src={poke.sprites.other.dream_world.front_default ?? defaultImage}
                                    className="card-img-top img-fluid"
                                    alt={poke.name}
                                    style={poke.sprites.other.dream_world.front_default ? {
                                        width: '250px',
                                        height: '200px',
                                    } : {
                                        width: '100%',
                                        height: '250px',
                                    }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center mt-5">{poke.name}</h5>
                                    <h6 className='text-center mt-1'>{`tipo: ${poke.types[0].type.name}`}</h6>
                                    <div className='d-flex justify-content-between'>
                                        <h6 className='text-start '>{`ataque: ${poke.stats[1].base_stat}`}</h6>
                                        <h6 className='text-end '>{`defensa: ${poke.stats[3].base_stat}`}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CardPokeCharacters