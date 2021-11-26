

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";
import Card from "../Card/Card";



export default function Home(){

    let countriesAll=useSelector(state=>state.countries)

    let dispach=useDispatch()

    useEffect(()=>{
        dispach(getCountries())
    },[dispach])

    // console.log(countriesAll)


    return(
        <div>

           {countriesAll.map(country=>{return(<Card name={country.name} image={country.image} continent={country.continent}></Card>)})} 

        </div>


            
        
    )
}