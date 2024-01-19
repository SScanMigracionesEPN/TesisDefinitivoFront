import { gql } from 'apollo-angular';

export const ALL_ACTORS = gql`
  query {
    allActors {
      id
      name
      prioridad
      coments
    }
  }
`;

export const CREATE_ACTOR = gql`
mutation ActorCreate($actor:CreateActor!){
    createActor(data:$actor){
      name
      prioridad
      coments
    }
  }
`;

export const UPDATE_ACTOR = gql`
mutation ActorUpdate($actor:UniqueActor!){
    updateActor(updateActorInput:$actor){
      name
      prioridad
      coments
    }
  }
`;

export const REMOVE_ACTOR = gql`
mutation ActorRemove($id:Int!){
    removeActor(id:$id){
      name
    }
  }
`;

export const SUBSCRIPTION_ACTOR = gql`
subscription {
    actor{
      id
      name
      prioridad
      coments
   }  
   }
`;

export const FIND_ONE_ACTOR = gql`
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






   


