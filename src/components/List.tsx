import React from 'react';
import ListStyles from '../styles/modules/List.module.css';


export default function List({ children }:any){
    console.log(children);
    return (
        <>
            <div id={ListStyles.aboutContainer}>
                {children}
            </div>
        </> 
    )
}

export function ListItem({ image, header, text }:any){
    return(
        <>
            <div className='about-persona'>
                <div className='about-image'>
                    <img src={image} />
                </div>
                <div className='about-text'>
                    <h1>{header}</h1>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}