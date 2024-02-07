import { Injectable } from '@angular/core';
import { ALL_USERS, CREATE_USER, FIND_ONE_USER, REMOVE_USER, UPDATE_USER } from '@gql/auth';
import { User, UserResponseModel } from '@models/strategy';
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
  
  findByName(name: string): Observable<UserResponseModel> {
    return this.apollo
      .watchQuery<UserResponseModel>({
        query: FIND_ONE_USER,
        variables: {
          name,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((user) => user.data));
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
