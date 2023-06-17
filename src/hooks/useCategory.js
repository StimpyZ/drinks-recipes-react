import { useContext } from 'react'
import { CategoryContext } from '../context/CategoryProvider'

export default function useCategory () {

    return useContext(CategoryContext)

}
