import { gql } from '@apollo/client';

export const QUERY_PROVIDERS = gql`
  {
    providers {
        Id
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