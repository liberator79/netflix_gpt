import React from 'react'
import { useParams } from 'react-router-dom'
const Movie = () => {
    const {id} = useParams
    return (
        <div>
            SingleMOvie {id}
        </div>
    )
}

export default Movie
