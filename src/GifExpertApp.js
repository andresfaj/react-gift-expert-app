import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Avatar','Dark','Stranger things'];

    //SE HACE ASÍ porque el arreglo puede variar a una const no se puede variar
    const [categories, setCategories] = useState(['Avatar']);

    
    return (
        <> 
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>

            <ol>
                { 
                    categories.map( category => {
                        // la key={} se agrega porque cada elemente debe ser único según Props
                        return <GifGrid
                                    key = {category} 
                                    category={category}
                                />
                    }).reverse()
                }
            </ol>
        </>
    )
}

export default GifExpertApp;