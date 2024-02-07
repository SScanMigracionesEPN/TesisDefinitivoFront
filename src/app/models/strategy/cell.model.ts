import { Tema } from "./topic.model";

export interface Celda{
    id: string;
    TemaParent: Tema; 
    CeldaParent: Celda;
    prioridad: number;
    tiempo: number;
    coment: string;
  }

  export interface CeldaResponseModel {
    allCeldas: Celda[];
  }
  
