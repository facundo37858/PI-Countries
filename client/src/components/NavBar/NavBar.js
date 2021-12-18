

import React from "react";
import { Link } from "react-router-dom";
import FilterByActivity from "../FilterByActivity/FilterByActivity";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import Order from "../Order/Order";
import OrderByArea from "../OrderByArea/OederByArea";
import OrderByPopulation from "../OrderByPopulation/OrderByPopulation";

import Search from "../Search/Search";

import style from './style.module.css'

export default function NavBar({handelPiginet}){


    return(
        <div className={style.navBar}>

            

            
            <div className={style.conteinerButton}>
                <Link style={{ textDecoration: 'none' }} to='/addActivity'><button className={style.links2}>Add Activity</button></Link>
            </div>
            
            <div className={style.search}>
                <Search></Search>
            </div>
            { <div className={style.filters}>
                <FilterByContinent handelPiginet={handelPiginet}></FilterByContinent>
                <FilterByActivity handelPiginet={handelPiginet}></FilterByActivity>
                <Order/>
                <OrderByPopulation></OrderByPopulation> 
                {/* <OrderByArea></OrderByArea> */}
            </div> }
            

            
          

        </div>
    )
}
