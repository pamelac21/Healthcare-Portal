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
export const QUERY_FACILITIES = gql`
  {
    facilities {
      Id
      name
      address
      }
    }
`;
export const QUERY_PROCEDURES = gql`
  {
    procedures {
      Id
      Procedure
      CPTCode
      Price
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
