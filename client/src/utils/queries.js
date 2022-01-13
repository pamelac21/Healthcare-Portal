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
      FacilityId
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



