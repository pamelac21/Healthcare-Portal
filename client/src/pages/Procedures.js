import React from 'react'
import ProceduresList from '../components/ProceduresList'
import { useQuery } from '@apollo/client';
import { QUERY_PROCEDURES } from '../utils/queries';

function Procedures() {
    const { data } = useQuery(QUERY_PROCEDURES);
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
