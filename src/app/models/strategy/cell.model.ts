import { Topic } from "./topic.model";

export interface Celda{
    id: string;
    TemaParent: Topic; 
    CeldaParent: Celda;
    prioridad: number;
    tiempo: number;
    coment: string;
  }

  export interface CeldaResponseModel {
    allCeldas: Celda[];
  }
  
