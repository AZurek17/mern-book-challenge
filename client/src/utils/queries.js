import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        bookText
        bookAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      bookText
      bookAuthor
      createdAt
      
    }
  }
`;

export const QUERY_SINGLE_BOOK = gql`
  query getSingleBook($bookId: ID!) {
    book(bookId: $bookId) {
      _id
      bookText
      bookAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        _id
        bookText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
