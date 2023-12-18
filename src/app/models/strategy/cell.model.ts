import { Actor } from "./actor.model";
import { Tema } from "./topic.model";

export interface Celda{
    id: string;
    TemaParent: Tema; 
    ActorParent: Actor;
    prioridad: number;
    tiempo: number;
    coment: string;
  }

