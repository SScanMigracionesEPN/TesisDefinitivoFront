import { Injectable } from '@angular/core';
import {
  ALL_ACTORS,
  CREATE_ACTOR,
  FIND_ONE_ACTOR,
  REMOVE_ACTOR,
  UPDATE_ACTOR,
} from '@gql/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Nullable } from 'primeng/ts-helpers';
import { Actor, ActorResponseModel } from '@models/strategy';

@Injectable({
  providedIn: 'root',
})
export class ActorHttpService {
  constructor(private apollo: Apollo) {}
  findAll(): Observable<ActorResponseModel> {
    return this.apollo
      .watchQuery<ActorResponseModel>({
        query: ALL_ACTORS,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((actors) => actors.data));
  }

  create(actor: Actor): Observable<MutationResult<Actor>> {
    return this.apollo.mutate<Actor>({
      mutation: CREATE_ACTOR,
      ///variables : formas en las que se pasa la informacion
      variables: {
        actor,
      },
      errorPolicy: 'all',
    });
  }

  findOne(id: number): Observable<ActorResponseModel> {
    return this.apollo
      .watchQuery<ActorResponseModel>({
        query: FIND_ONE_ACTOR,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((actors) => actors.data));
  }

  update(actor: Actor): Observable<MutationResult<Actor>> {
    return this.apollo.mutate<Actor>({
      mutation: UPDATE_ACTOR,
      ///variables : formas en las que se pasa la informacion
      variables: {
        actor,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): void {
    this.apollo.mutate<Actor>({
      mutation: REMOVE_ACTOR,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }

  //Los services se hacen a partir de la carpeta de query gql
}
