import { Injectable } from '@angular/core';
import { ALL_LINKS, CREATE_LINK, FIND_ONE_LINK, UPDATE_LINK, REMOVE_LINK } from '@gql/strategy/link.gql';
import { LinkResponseModel, Link } from '@models/strategy';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkHttpService {

  constructor(private apollo: Apollo) {}
  findAll(): Observable<LinkResponseModel> {
    return this.apollo
      .watchQuery<LinkResponseModel>({
        query: ALL_LINKS,
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((links) => links.data));
  }

  create(link: Link): Observable<MutationResult<Link>> {
    return this.apollo.mutate<Link>({
      mutation: CREATE_LINK,
      ///variables : formas en las que se pasa la informacion
      variables: {
        link,
      },
      errorPolicy: 'all',
    });
  }

  findOne(id: number): Observable<LinkResponseModel> {
    return this.apollo
      .watchQuery<LinkResponseModel>({
        query: FIND_ONE_LINK,
        variables: {
          id,
        },
        errorPolicy: 'all',
      })
      .valueChanges.pipe(map((links) => links.data));
  }

  update(link: Link): Observable<MutationResult<Link>> {
    return this.apollo.mutate<Link>({
      mutation: UPDATE_LINK,
      ///variables : formas en las que se pasa la informacion
      variables: {
        link,
      },
      errorPolicy: 'all',
    });
  }

  remove(id: number): void {
    this.apollo.mutate<Link>({
      mutation: REMOVE_LINK,
      variables: {
        id,
      },
      errorPolicy: 'all',
    });
  }
}
