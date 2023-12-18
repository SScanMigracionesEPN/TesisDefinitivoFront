import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { APOLLO_NAMED_OPTIONS, ApolloModule, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ApolloModule,HttpClientModule],
  providers:[{
    provide: APOLLO_NAMED_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'http://localhost:3000',
        }),
      };
    },
    deps: [HttpLink],
  },],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tesis1definitivoFrontAngular';
}
