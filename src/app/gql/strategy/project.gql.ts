import { gql } from 'apollo-angular';

export const ALL_PROJECTS = gql`
  query {
    allProjects {
      id
      name
    }
  }
`;

export const CREATE_PROJECT = gql`
mutation ProjectCreate($project:CreateProject!){
    createProject(data:$project){
      name
    }
  }
`;

export const UPDATE_PROJECT = gql`
mutation ProjectUpdate($project:UniqueProject!){
    updateProject(updateProjectInput:$project){
      name
    }
  }
`;

export const REMOVE_PROJECT = gql`
mutation ProjectRemove($id:Int!){
    removeProject(id:$id){
      name
    }
  }
`;

export const SUBSCRIPTION_PROJECT = gql`
subscription {
    project{
     id
     name
     description
   }  
   }
`;

export const FIND_ONE_PROJECT = gql`
query FindProject($id:Int!){
    project(id:$id)
    {
      name
    }    
  }
`;






   


