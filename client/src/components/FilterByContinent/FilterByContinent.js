import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent } from "../../actions";




export default function FilterByContinent(){

    let countriesAllBackup=useSelector(state=>state.countriesBackup)

    const continents=(countriesAllBackup)=>{

        let continents=new Set(countriesAllBackup.map(country=>{return country.continent}))

        return Array.from(continents).sort()

    }

    const Countrycontinents=continents(countriesAllBackup)

    let dispach=useDispatch()

    const handelFilter=(event)=>{

        event.preventDefault()

        //console.log(event.target.value)

        

        dispach(filterByContinent(event.target.value))


    }

    




    return (
        
        <div>
            <p><label htmlFor='continent-select'>Filter by Continent</label></p>

            <select name='continent' onChange={e=>handelFilter(e)}>
                {/* <option value='all'>--Please choose an option--</option> */}

                <option value='all'>Show All</option>

                {countriesAllBackup.length>0&& Countrycontinents.map((continent,index)=>{

                    return(<option key={index} value={continent}>{continent}</option>)})
                }    
                    
               


                

            </select>
        </div>
        
    )
    
}