import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Kakegurui', 'One Piece', 'Hilda'];

    const [ categories, setCategories] = useState(['Pokemon']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Gumball' ] );
    //     setCategories( cats => [...cats, 'Gumball'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr/>

            <ol>
                { 
                    categories.map( c =>( 
                        <GifGrid
                            key={ c }
                            category={ c }    
                        />
                    ))
                }
            </ol>

        </>
    );

}

export default GifExpertApp;