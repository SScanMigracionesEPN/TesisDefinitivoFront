import { User } from "../auth/user.model";
import { Actor } from "./actor.model";
import { Celda } from "./cell.model";
import { Topic } from "./topic.model";

export interface Matrix{
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
    User?: User;
    Actores: Actor[];
    Temas: Topic[];
    Celdas: Celda[];

  }

  export interface MatrixResponseModel {
    allMatriz: Matrix[];
  }
  