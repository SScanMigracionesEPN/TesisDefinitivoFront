export interface Actor {
  id: number;
  name: string;
  prioridad: number;
  coments: string;
  parent: Boolean;
  hijos: Actor[];
  // __typename: any;
}

export interface ActorResponseModel {
  allActors: Actor[];
}
