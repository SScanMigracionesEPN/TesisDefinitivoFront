import { User } from "../auth/user.model";
import { Actor } from "./actor.model";
import { Celda } from "./cell.model";
import { Tema } from "./topic.model";

export interface Matriz{
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
    User?: User;
    Actores: Actor[];
    Temas: Tema[];
    Celdas: Celda[];

  }