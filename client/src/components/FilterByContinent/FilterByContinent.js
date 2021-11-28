import React from "react";
import { useSelector } from "react-redux";




export default function FilterByContinent(){

    let countriesAllBackup=useSelector(state=>state.countriesBackup)

    const continents=(countriesAllBackup)=>{

        let continents=new Set(countriesAllBackup.map(country=>{return country.continent}))

        return Array.from(continents).sort()

    }

    const Countrycontinents=continents(countriesAllBackup)

    




    return (
        
        <div>
            <p><label htmlFor='continent-select'>Filter by Continent</label></p>

            <select name='continent'>
                <option value=''>--Please choose an option--</option>

                {countriesAllBackup.length>0&& Countrycontinents.map((continent,index)=>{

                    return(<option key={index} value={continent}>{continent}</option>)})
                }    
                    
               


                

            </select>
        </div>
        
    )
    
}