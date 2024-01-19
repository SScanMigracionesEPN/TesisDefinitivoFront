import { gql } from 'apollo-angular';

export const ALL_TOPICS = gql`
  query {
    allTopics {
      id
      name
    }
  }
`;

export const CREATE_TOPIC = gql`
mutation TopicCreate($topic:CreateTopic!){
    createTopic(data:$topic){
      name
    }
  }
`;

export const UPDATE_TOPIC = gql`
mutation TopicUpdate($topic:UniqueTopic!){
    updateTopic(updateTopicInput:$topic){
      name
    }
  }
`;

export const REMOVE_TOPIC = gql`
mutation TopicRemove($id:Int!){
    removeTopic(id:$id){
      name
    }
  }
`;

export const SUBSCRIPTION_TOPIC = gql`
subscription {
    topic{
     id
     name
   }  
   }
`;

export const FIND_ONE_TOPIC = gql`
query FindTopic($id:Int!){
    topic(id:$id)
    {
      name
    }    
  }
`;






   


