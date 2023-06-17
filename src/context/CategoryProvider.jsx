import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const CategoryContext = createContext()

export default function CategoryProvider ({ children }) {

    const [search, setSearch] = useState({
        name: '',
        category: ''
    })
    const [category, setCategory] = useState([])

    const obtainCategories = async () => {

        try {

            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const { data } = await axios(url)

            setCategory(data.drinks)

        } catch (error) {

            console.log(error)

        }

    }

    useEffect(() => {

        obtainCategories()

    }, [])

    const handleChangeSearch = e => {

        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })

    }

    const value = {
        category,
        handleChangeSearch,
        search
    }
    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )

}
