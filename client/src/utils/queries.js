import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query providers {
    providers {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;