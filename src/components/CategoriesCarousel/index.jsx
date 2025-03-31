import { useState } from 'react'


import {api} from '../../services/api'

export function CategoriesCarousel() {
    const [Categories, setCategories] = useState([]);

    useState(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')


            setCategories(data)
            console.log(data)
        }

        loadCategories()
    }, [])

    return (
        <div>
            <h1>Caroseul</h1>
        </div>
    )
}