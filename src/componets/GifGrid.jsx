import React, { useEffect, useState } from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import {GifItem} from './GifItem'


export const GifGrid = ({category}) => {

    //Este es mi custom hook que obtiene las imagenes, y un loading 
    const { images, IsLoading } = useFetchGifs( category )

    return (
        
    <>
        <h3>{ category }</h3>
        { /* Cargando screen */
            IsLoading ? (<h2>We are working on it...</h2>) : null
        }

        <div className='card-grid'>

            {images.map( ( image ) => (
                <GifItem key={image.id} {...image}/>
            ))}

        </div>
    </>
  )
}

