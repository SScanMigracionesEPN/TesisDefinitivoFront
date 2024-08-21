import { gql } from 'apollo-angular';

export const ALL_TOPICS = gql`
  query {
    allTemas {
      id
      name
      prioridad
      coments
    }
  }
`;

export const CREATE_TOPIC = gql`
mutation TemaCreate($topic:CreateTema!){
    createTema(data:$topic){
      name
      prioridad
      coments
    }
  }
`;

export const UPDATE_TOPIC = gql`
mutation TemaUpdate($topic:UniqueTema!){
    updateTema(updateTemaInput:$topic){
      name
      prioridad
      coments
    }
  }
`;

export const REMOVE_TOPIC = gql`
mutation TemaRemove($id:Int!){
    removeTema(id:$id){
      name
      prioridad
      coments
    }
  }
`;

export const SUBSCRIPTION_TOPIC = gql`
subscription {
    topic{
     id
     name
     prioridad
     coments
   }  
   }
`;

export const FIND_ONE_TOPIC = gql`
query FindTema($id:Int!){
    topic(id:$id)
    {
      name
      prioridad
      coments
    }    
  }
`;






   


