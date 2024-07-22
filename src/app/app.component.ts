import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    //  ToastService
  ],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tesis1definitivoFrontAngular';
}
