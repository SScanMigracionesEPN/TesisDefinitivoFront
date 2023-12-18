
export interface Tema {
    id: string;
    name: string;
    prioridad: number;
    coments: string;
    parent: Boolean;
    hijos: [Tema];
    __typename: any;
  }

  