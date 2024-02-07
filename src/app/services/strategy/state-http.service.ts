import { Injectable } from '@angular/core';
import { ALL_STATES, CREATE_STATE, FIND_ONE_STATE, UPDATE_STATE, REMOVE_STATE } from '@gql/strategy';
import { StateResponseModel, State } from '@models/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateHttpService {

  constructor(private apollo: Apollo) {}
  findAll(): Observable<StateResponseModel> {
    return this.apollo
      .watchQuery<StateResponseModel>({
        query: ALL_STATES,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((states) => states.data));
  }

  create(state: State): Observable<MutationResult<State>> {
    return this.apollo.mutate<State>({
      mutation: CREATE_STATE,
      ///variables : formas en las que se pasa la informacion
      variables: {
        state,
      },
      errorPolicy: 'all',
    });
  }

  findOne(id: number): Observable<StateResponseModel> {
    return this.apollo
      .watchQuery<StateResponseModel>({
        query: FIND_ONE_STATE,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((states) => states.data));
  }

  update(state: State): Observable<MutationResult<State>> {
    return this.apollo.mutate<State>({
      mutation: UPDATE_STATE,
      ///variables : formas en las que se pasa la informacion
      variables: {
        state,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): void {
    this.apollo.mutate<State>({
      mutation: REMOVE_STATE,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }
}
