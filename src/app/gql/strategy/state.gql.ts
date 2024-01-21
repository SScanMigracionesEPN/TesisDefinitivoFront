import { gql } from 'apollo-angular';

export const ALL_STATES = gql`
  query {
    allEstados {
      id
      NumActor
      NumTemas
    }
  }
`;

//no id en creacion
export const CREATE_STATE = gql`
mutation EstadoCreate($state:CreateEstado!){
    createEstado(data:$state){
        
        NumActor
        NumTemas
    }
  }
`;

export const UPDATE_STATE = gql`
mutation EstadoUpdate($state:UniqueEstado!){
    updateEstado(updateEstadoInput:$state){
        id
        NumActor
        NumTemas
    }
  }
`;

export const REMOVE_STATE = gql`
mutation EstadoRemove($id:Int!){
    removeEstado(id:$id){
      id
    }
  }
`;

export const SUBSCRIPTION_STATE = gql`
subscription {
    state{
      id
      NumActor
      NumTemas
   }  
   }
`;

export const FIND_ONE_STATE = gql`
query FindEstado($id:Int!){
    state(id:$id)
    {
        id
        NumActor
        NumTemas
    }    
  }
`;

///sacar de los dtos(back) , models del graphql (front)









