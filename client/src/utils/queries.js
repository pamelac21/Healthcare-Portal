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
      facility{
        name
        address
      }
      }
    }
`;
export const QUERY_SEARCHPROCEDURES = gql`
  query Procedures($Procedure: String) {
    procedures(Procedure: $Procedure) {
      Id
      Procedure
      CPTCode
      Price
      FacilityId
    }
  }
`;