import { Injectable } from '@angular/core';
import { ALL_CELDAS, CREATE_CELDA, FIND_ONE_CELDA, UPDATE_CELDA, REMOVE_CELDA } from '@gql/strategy';
import { Celda, CeldaResponseModel } from '@models/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeldaHttpService {

  constructor(private apollo: Apollo) {}
  findAll(): Observable<CeldaResponseModel> {
    return this.apollo
      .watchQuery<CeldaResponseModel>({
        query: ALL_CELDAS,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((cells) => cells.data));
  }

  create(cell: Celda): Observable<MutationResult<Celda>> {
    return this.apollo.mutate<Celda>({
      mutation: CREATE_CELDA,
      ///variables : formas en las que se pasa la informacion
      variables: {
        cell,
      },
      errorPolicy: 'all',
    });
  }

  findOne(id: number): Observable<CeldaResponseModel> {
    return this.apollo
      .watchQuery<CeldaResponseModel>({
        query: FIND_ONE_CELDA,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((cells) => cells.data));
  }

  update(cell: Celda): Observable<MutationResult<Celda>> {
    return this.apollo.mutate<Celda>({
      mutation: UPDATE_CELDA,
      ///variables : formas en las que se pasa la informacion
      variables: {
        cell,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): void {
    this.apollo.mutate<Celda>({
      mutation: REMOVE_CELDA,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }
}
