//Cllection de todos los elementos
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs( category );

    console.log(loading);


    return (
        <> 
            <h3> {category} </h3>

            { loading ? <p>Cargando...</p> : null}

            <div className="card-grid">
                
                { 
                    images.map((img) => {
                        return <GifGridItem
                            key = { img.id } 
                            img = { img }
                        />
                    }) 
                }
                
            </div>
        </>
    )
}
