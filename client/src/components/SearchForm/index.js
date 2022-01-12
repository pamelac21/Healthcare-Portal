import React from 'react'
import './searchForm.css'
import {Link} from 'react-router-dom'


const SearchForm = () => {
    return (
        <div className='card-searchform'>
            
           <Link to='/Procedures'><button className='action-button'>Procedures</button> </Link> 
            <Link to='/Providers'><button className='action-button'>Providers</button></Link>
            <Link to='/Facilities'><button className='action-button'>Facilities</button></Link> 
           <input className='form-input-searchform' type='text'></input> <Link to='/SearchResults'><button className='action-button-search'>Search</button></Link>
           
        </div>
    )
}

export default SearchForm