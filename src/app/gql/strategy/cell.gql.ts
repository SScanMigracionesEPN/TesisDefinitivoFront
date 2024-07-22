import { gql } from 'apollo-angular';
// Revision de las request
export const ALL_CELDAS = gql`
  query {
    allActors {
      id
      name
      prioridad
      coments
    }
  }
`;

export const CREATE_CELDA = gql`
mutation ActorCreate($actor:CreateActor!){
    createActor(data:$actor){
      name
      prioridad
      coments
    }
  }
`;

export const UPDATE_CELDA = gql`
mutation ActorUpdate($actor:UniqueActor!){
    updateActor(updateActorInput:$actor){
      name
      prioridad
      coments
    }
  }
`;

export const REMOVE_CELDA = gql`
mutation ActorRemove($id:Int!){
    removeActor(id:$id){
      name
    }
  }
`;

export const SUBSCRIPTION_CELDA = gql`
subscription {
    actor{
      id
      name
      prioridad
      coments
   }  
   }
`;

export const FIND_ONE_CELDA = gql`
query FindActor($id:Int!){
    actor(id:$id)
    {
      id
      name
      prioridad
      coments
    }    
  }
`;

///sacar de los dtos(back) , models del graphql (front)






   


