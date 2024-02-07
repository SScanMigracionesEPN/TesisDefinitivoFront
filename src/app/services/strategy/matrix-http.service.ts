import { Injectable } from '@angular/core';
import {
  ALL_MATRIXS,
  CREATE_MATRIX,
  FIND_ONE_MATRIX,
  UPDATE_MATRIX,
  REMOVE_MATRIX,
} from '@gql/strategy';
import { MatrixResponseModel, Matrix } from '@models/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatrixHttpService {
  constructor(private apollo: Apollo) {}
  findAll(): Observable<MatrixResponseModel> {
    return this.apollo
      .watchQuery<MatrixResponseModel>({
        query: ALL_MATRIXS,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((matrixs) => matrixs.data));
  }

  create(matrix: Matrix): Observable<MutationResult<Matrix>> {
    return this.apollo.mutate<Matrix>({
      mutation: CREATE_MATRIX,
      ///variables : formas en las que se pasa la informacion
      variables: {
        matrix,
      },
      errorPolicy: 'all',
    });
  }

  findOne(id: number): Observable<MatrixResponseModel> {
    return this.apollo
      .watchQuery<MatrixResponseModel>({
        query: FIND_ONE_MATRIX,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((matrixs) => matrixs.data));
  }

  update(matrix: Matrix): Observable<MutationResult<Matrix>> {
    return this.apollo.mutate<Matrix>({
      mutation: UPDATE_MATRIX,
      ///variables : formas en las que se pasa la informacion
      variables: {
        matrix,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): void {
    this.apollo.mutate<Matrix>({
      mutation: REMOVE_MATRIX,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }
}
