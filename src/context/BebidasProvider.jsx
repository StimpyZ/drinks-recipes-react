import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const BebidasContext = createContext()

export default function BebidasProvider ({ children }) {

    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [singleDrink, setSingleDrink] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        const obtainBebidaById = async () => {

            if (!drinkId) return

            try {

                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

                const { data } = await axios(url)

                setSingleDrink(data.drinks[0])
                setLoading(false)

            } catch (error) {

                console.log(error)

            } finally {

                setLoading(false)

            }

        }

        obtainBebidaById(drinkId)

    }, [drinkId])

    const obtainBebidas = async data => {

        try {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.name}&c=${data.category}`

            const { data: datos } = await axios(url)

            setDrinks(datos.drinks)

        } catch (error) {

            console.log(error)

        }

    }

    const handleModalClick = () => {

        setModal(!modal)

    }

    const handleDrinkId = id => {

        setDrinkId(id)

    }

    const value = {
        obtainBebidas,
        drinks,
        handleModalClick,
        modal,
        handleDrinkId,
        drinkId,
        singleDrink,
        loading

    }
    return (
        <BebidasContext.Provider value={value}>
            {children}
        </BebidasContext.Provider>
    )

}
