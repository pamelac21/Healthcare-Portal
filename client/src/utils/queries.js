import { gql } from '@apollo/client';

export const QUERY_PROVIDERS = gql`
  query providers {
    providers {
        id
        name
        FacilityId
      }
    }
`;

export const QUERY_SEARCH = gql`
  query Search($FacilityId: Int) {
    procedures(FacilityId: $FacilityId) {
      Id
      Procedure
      CPTCode
      Price
      FacilityId
      facilities{ 
        Id
        name
        address
      }
    }
  }
`;