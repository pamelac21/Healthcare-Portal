import React from 'react'
import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'
import { useQuery } from '@apollo/client';
import { QUERY_PROVIDERS } from '../utils/queries';

function Providers() {
    const { loading, data } = useQuery(QUERY_PROVIDERS);
    const providers = data?.providers || [];
    console.log(providers);
    return (
        <div>
            <ProvidersList
            providers={providers}/>
        </div>
    )
}

export default Providers
