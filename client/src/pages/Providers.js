import React from 'react'
import Header from '../components/Header'
import ProvidersList from '../components/ProvidersList'
import { useQuery } from '@apollo/client';
import { QUERY_PROVIDERS } from '../utils/queries';

function Providers() {
    return (
        <div>
            <ProvidersList/>
        </div>
    )
}

export default Providers
