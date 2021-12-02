

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries } from "../../actions";

import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Paginacion from "../Paginacion/Paginacion";




export default function Home(){

    let countriesAll=useSelector(state=>state.countries)

    const [currenPage,setCurrenPage]=useState(1)

    const [countriesPerPage]=useState(10)



    

    let dispach=useDispatch()

    useEffect(()=>{
        dispach(getCountries())
    },[dispach])

    useEffect(()=>{
        dispach(getActivities())

    },[dispach])

    // console.log(countriesAll)

    //obtengo los countries actuales

    const indexLastCountries=currenPage * countriesPerPage

    //console.log(Math.ceil(countriesAll.length/countriesPerPage))

    const indexOfFirstCountries=indexLastCountries - countriesPerPage

    const currenCountries= countriesAll.slice(indexOfFirstCountries,indexLastCountries)

    //cambio de pagina

    const handelPiginet=(pageNumber)=>{
        setCurrenPage(pageNumber)

    }
    const handelPrevPage=(e)=>{
        e.preventDefault()
        if(currenPage>1){
            setCurrenPage(currenPage-1)
        }
        
    }
    const handelNextPage=(e)=>{
        e.preventDefault()
        //let maxPage=Math.floor(countriesAll.length/10)
        if(currenPage<Math.ceil(countriesAll.length/countriesPerPage)){
            setCurrenPage(currenPage+1)
        }
    }



    return(

        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
               <Cards countries={currenCountries}></Cards>
            </div>
            <div>
                <Paginacion countriesPerPage={countriesPerPage} handelPiginet={handelPiginet} 
                totalCountries={countriesAll.length} handelPrevPage={handelPrevPage} handelNextPage={handelNextPage}></Paginacion>
            </div>

            

          

        </div>


            
        
    )
}