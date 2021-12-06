import React from "react";
import Card from "../Card/Card";
import style from './style.module.css'


export default function Cards({countries}){
    return(
        <div className={style.conteinerCard}>
            {Array.isArray(countries)?countries.map(country=>{
                return(
                <Card key={country.id} id={country.id} name={country.name} image={country.image} continent={country.continent}>
                    
                </Card>)})
                :
                <p className={style.text}>{countries}</p>
            } 

        </div>
    )
}