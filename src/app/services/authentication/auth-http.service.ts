import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { ALL_USERS, CREATE_USER, FIND_NAME_USER, FIND_ONE_USER, REMOVE_USER, UPDATE_USER } from '@gql/auth';
import { User, UserOneResponseModel, UserResponseModel } from '@models/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {


  constructor(private apollo: Apollo) {}
  findAll(): Observable<UserResponseModel> {
    return this.apollo
      .watchQuery<UserResponseModel>({
        query: ALL_USERS,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((users) => users.data));
  }

  create(user: User): Observable<MutationResult<User>> {
    return this.apollo.mutate<User>({
      mutation: CREATE_USER,
      ///variables : formas en las que se pasa la informacion
      variables: {
        user,
      },
      errorPolicy: 'all',
    });
  }

  findOne(id: number): Observable<UserResponseModel> {
    return this.apollo
      .watchQuery<UserResponseModel>({
        query: FIND_ONE_USER,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((users) => users.data));
  }
  
  findByName(username: string): Observable<ApolloQueryResult<UserOneResponseModel>> {
    return this.apollo
      .watchQuery<UserOneResponseModel>({
        query: FIND_NAME_USER,
        variables: {
          username,
        },
        errorPolicy: 'all',
      })
      .valueChanges;
  }

  update(user: User): Observable<MutationResult<User>> {
    return this.apollo.mutate<User>({
      mutation: UPDATE_USER,
      ///variables : formas en las que se pasa la informacion
      variables: {
        user,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): void {
    this.apollo.mutate<User>({
      mutation: REMOVE_USER,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }



}
