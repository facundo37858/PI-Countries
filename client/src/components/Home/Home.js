

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";



export default function Home(){

    let countriesAll=useSelector(state=>state.countries)

    

    let dispach=useDispatch()

    useEffect(()=>{
        dispach(getCountries())
    },[dispach])

    // console.log(countriesAll)


    return(

        <div>
            <div>
                <NavBar></NavBar>
            </div>

           {Array.isArray(countriesAll)?countriesAll.map(country=>{return(<Card key={country.id} name={country.name} image={country.image} continent={country.continent}></Card>)})
           :
           <p>{countriesAll}</p>
           } 

        </div>


            
        
    )
}