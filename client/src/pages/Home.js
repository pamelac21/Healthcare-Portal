import React from 'react'
import { Link } from "react-router-dom";
import SearchForm from '../components/SearchForm';
import Header from '../components/Header'
import './pages.css'
//import {Query_PROCEDURES} from '../utils/queries'

function Home() {

    return (
        <div className='home'>
            <SearchForm/> 
        </div>
    )
}

export default Home


