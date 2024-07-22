import { gql } from 'apollo-angular';

export const ALL_USERS = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;

export const CREATE_USER = gql`
mutation UserCreate($user:CreateUser!){
    createUser(data:$user){
      name
    }
  }
`;

export const UPDATE_USER = gql`
mutation UserUpdate($user:UniqueUser!){
    updateUser(updateUserInput:$user){
      name
    }
  }
`;

export const REMOVE_USER = gql`
mutation UserRemove($id:Int!){
    removeUser(id:$id){
      name
    }
  }
`;

export const SUBSCRIPTION_USER = gql`
subscription {
    user{
     id
     name
   }  
   }
`;

export const FIND_ONE_USER = gql`
query FindUser($id:Int!){
    user(id:$id)
    {
      name
    }    
  }
`;
export const FIND_NAME_USER = gql`
query FindUserByName($username:String!){
    findByName(username:$username)
    {
      name
    }    
  }
`;






   


