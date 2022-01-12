import React from 'react'
import './searchForm.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useQuery, gql } from "@apollo/client";
import { QUERY_PROCEDURES} from '../../utils/queries'



const SearchForm = ({}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const { loading, data } = useQuery(QUERY_PROCEDURES);
    const procedures = data?.procedures || [];

    return (
        <div className='card-searchform'>
            
           <Link to='/Procedures'><button className='action-button'>Procedures</button> </Link> 
            <Link to='/Providers'><button className='action-button'>Providers</button></Link>
            <Link to='/Facilities'><button className='action-button'>Facilities</button></Link> 
            <form>
           <input 
           className='form-input-searchform' 
           type='text' 
           name="searchTerm"
           type="searchTerm"
           id="searchTerm"
           onChange={event => (setSearchTerm(event.target.value))}
           ></input> 
           <button className='action-button-search'>Search</button>
          </form>
           {procedures &&
           procedures.filter((val)=>{
               if (searchTerm === ""){
                   return val
               }
               else if (val.Procedure.toLowerCase().includes(searchTerm.toLowerCase())){
                   return val
               }
           })
        .map(val => (
          <div key={val.Id} className="card mb-3">
            <h2 className="card-header">
              {val.Procedure}
            </h2>
            <div className="card-body">
              <p>{val.CPTCode}</p>
                <p>{val.Price}</p>
                <p>{val.facility}</p>
            </div>
          </div>
        ))}
        </div>
    )
}

export default SearchForm