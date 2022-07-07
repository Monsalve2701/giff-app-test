import  { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    
    const getImages = async() => {
        /* Esta funcion obtiene las imagenes desde la API y las mete en el useState de arriba */
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect( () => { 
      getImages()
    }, [])

    
  return {
    images,
    IsLoading: IsLoading
  }
}

export default useFetchGifs