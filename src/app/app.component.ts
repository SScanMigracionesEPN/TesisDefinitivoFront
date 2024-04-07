import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  APOLLO_NAMED_OPTIONS,
  ApolloModule,
  NamedOptions,
} from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@services/core/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ApolloModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [
   MessageService,
   ToastService
  ],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tesis1definitivoFrontAngular';
}
