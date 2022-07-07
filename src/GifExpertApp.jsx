import { useState } from 'react'
import {AddCategory, GifGrid} from './componets'
import './Styles.css'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ "Dragon Ball" ])

    const onAddCategory = ( NewCategory ) => {
        if(categories.includes(NewCategory))return
        setCategories([NewCategory ,...categories])
    }


  return (
    <>
    
        <h1>This is the gif app</h1>
        
        
        <AddCategory onNewCategory={ onAddCategory } />
        
        { categories.map( (category) => (
            <GifGrid key={ category } category = {category}/>
        ))
        }
        

    </>
  )
}

export default GifExpertApp