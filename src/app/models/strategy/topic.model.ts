
export interface Topic {
    id: string;
    name: string;
    prioridad: number;
    coments: string;
    parent: Boolean;
    hijos: Topic[];
    __typename: any;
  }

  export interface TopicResponseModel {
    allTopics: Topic[];
  }
  
  