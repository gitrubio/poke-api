import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
import CardPokeCharacters from './CardPokeCharacters'
import './poke.css'

const PokeListCharacters = () => {

    const [pokemones, setPokemones] = useState([])
    const [loader, setLoader] = useState(false)
    const [currentPage, setCurrent] = ("https://pokeapi.co/api/v2/pokemon")
    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })

    const getPokemones = async () => {
        const { data } = await axios.get(currentPage)
        const { results, next, previous } = data;
        setPagination({next, previous })
        await dataPokemones(results)
    }

    useEffect(() => {
        setLoader(true)
        getPokemones().then(()=>{}).catch((e)=>{})
    }, [currentPage])

    

    const dataPokemones = async (data) => {
        try {
            const pokePromise = await Promise.allSettled(data.map(({ url }) => axios.get(url)))
            const pokeData = pokePromise.map(pokemon => pokemon.value.data)
            setPokemones(pokeData)
            const loaderTime = setTimeout(()=>{
                setLoader(false)
                clearTimeout(loaderTime)
            },1000)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Pagination pagination={pagination} loading={loader} setPagination={setCurrent} />
            {loader ?
                <div style={{ width: '450px', height: '70vh', marginTop: '80px', display : 'flex', justifyContent: 'center' }}>
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
                :
                <CardPokeCharacters pokemones={pokemones} />
            }
            <Pagination pagination={pagination} loading={loader} setPagination={setCurrent} />
        </>
    )
}

export default PokeListCharacters