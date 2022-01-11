import React from 'react'
import FacilitiesList from '../components/FacilitiesList'
import Header from '../components/Header'
import { useQuery } from '@apollo/client';
import { QUERY_FACILITIES } from '../utils/queries';

function Facilities() {
    const { loading, data } = useQuery(QUERY_FACILITIES);
    const facilities = data?.facilities || [];
    console.log(facilities);
    return (
        <div>
            <FacilitiesList
            facilities={facilities}/>
        </div>
    )
}

export default Facilities

