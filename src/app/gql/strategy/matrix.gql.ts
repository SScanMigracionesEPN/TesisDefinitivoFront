import { gql } from 'apollo-angular';

export const ALL_MATRIXS = gql`
  query {
    allMatrixs {
      id
      name
    }
  }
`;

export const CREATE_MATRIX = gql`
mutation MatrixCreate($matrix:CreateMatrix!){
    createMatrix(data:$matrix){
      name
    }
  }
`;

export const UPDATE_MATRIX = gql`
mutation MatrixUpdate($matrix:UniqueMatrix!){
    updateMatrix(updateMatrixInput:$matrix){
      name
    }
  }
`;

export const REMOVE_MATRIX = gql`
mutation MatrixRemove($id:Int!){
    removeMatrix(id:$id){
      name
    }
  }
`;

export const SUBSCRIPTION_MATRIX = gql`
subscription {
    matrix{
     id
     name
   }  
   }
`;

export const FIND_ONE_MATRIX = gql`
query FindMatrix($id:Int!){
    matrix(id:$id)
    {
      name
    }    
  }
`;






   


