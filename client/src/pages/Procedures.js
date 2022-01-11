import React from 'react'
import Header from '../components/Header'
import ProceduresList from '../components/ProceduresList'
import { useQuery } from '@apollo/client';
import { QUERY_PROCEDURES } from '../utils/queries';

function Procedures() {
    const { loading, data } = useQuery(QUERY_PROCEDURES);
    const procedures = data?.procedures || [];
    console.log(procedures);
    return (
        <div>
            <ProceduresList
            procedures={procedures}/>
        </div>
    )
}

export default Procedures
