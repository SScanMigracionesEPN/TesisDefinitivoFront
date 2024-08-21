import { Injectable } from '@angular/core';
import { ALL_TOPICS, CREATE_TOPIC, FIND_ONE_TOPIC, UPDATE_TOPIC, REMOVE_TOPIC } from '@gql/strategy';
import { TopicResponseModel, Topic } from '@models/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { MessageService } from 'primeng/api';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicHttpService {

  constructor(private apollo: Apollo) {}
  findAll(): Observable<TopicResponseModel> {
    return this.apollo
      .watchQuery<TopicResponseModel>({
        query: ALL_TOPICS,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(
        map((topics) => topics.data),
        );
  }

  create(topic: Topic): Observable<MutationResult<Topic>> {
    return this.apollo.mutate<Topic>({
      mutation: CREATE_TOPIC,
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
        query: FIND_ONE_TOPIC,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((topics) => topics.data));
  }

  update(topic: Topic): Observable<MutationResult<Topic>> {
    return this.apollo.mutate<Topic>({
      mutation: UPDATE_TOPIC,
      ///variables : formas en las que se pasa la informacion
      variables: {
        topic,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): Observable<MutationResult<Topic>> {
    return this.apollo.mutate<Topic>({
      mutation: REMOVE_TOPIC,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }
}
