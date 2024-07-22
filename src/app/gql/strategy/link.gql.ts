import { gql } from 'apollo-angular';

export const ALL_LINKS = gql`
  query {
    allMatrixs {
      id
      name
    }
  }
`;

export const CREATE_LINK = gql`
mutation MatrixCreate($matrix:CreateMatrix!){
    createMatrix(data:$matrix){
      name
    }
  }
`;

export const UPDATE_LINK = gql`
mutation MatrixUpdate($matrix:UniqueMatrix!){
    updateMatrix(updateMatrixInput:$matrix){
      name
    }
  }
`;

export const REMOVE_LINK = gql`
mutation MatrixRemove($id:Int!){
    removeMatrix(id:$id){
      name
    }
  }
`;

export const SUBSCRIPTION_LINK = gql`
subscription {
    matrix{
     id
     name
   }  
   }
`;

export const FIND_ONE_LINK = gql`
query FindMatrix($id:Int!){
    matrix(id:$id)
    {
      name
    }    
  }
`;






   


