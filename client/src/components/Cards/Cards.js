import React from "react";
import Card from "../Card/Card";



export default function Cards({countries}){
    return(
        <div>
            {Array.isArray(countries)?countries.map(country=>{return(<Card key={country.id} name={country.name} image={country.image} continent={country.continent}></Card>)})
                :
                <p>{countries}</p>
            } 

        </div>
    )
}