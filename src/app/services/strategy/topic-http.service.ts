import { Injectable } from '@angular/core';
import { ALL_STATES, CREATE_STATE, FIND_ONE_STATE, UPDATE_STATE, REMOVE_STATE } from '@gql/strategy';
import { TopicResponseModel, Topic } from '@models/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { MessageService } from 'primeng/api';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicHttpService {

  constructor(private apollo: Apollo, private messageService: MessageService) {}
  findAll(): Observable<TopicResponseModel> {
    return this.apollo
      .watchQuery<TopicResponseModel>({
        query: ALL_STATES,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(
        map((topics) => topics.data),
        );
  }

  create(topic: Topic): Observable<MutationResult<Topic>> {
    return this.apollo.mutate<Topic>({
      mutation: CREATE_STATE,
      ///variables : formas en las que se pasa la informacion
      variables: {
        topic,
      },
      errorPolicy: 'all',
    });
  }

  findOne(id: number): Observable<TopicResponseModel> {
    return this.apollo
      .watchQuery<TopicResponseModel>({
        query: FIND_ONE_STATE,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((topics) => topics.data));
  }

  update(topic: Topic): Observable<MutationResult<Topic>> {
    return this.apollo.mutate<Topic>({
      mutation: UPDATE_STATE,
      ///variables : formas en las que se pasa la informacion
      variables: {
        topic,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): void {
    this.apollo.mutate<Topic>({
      mutation: REMOVE_STATE,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }
}
