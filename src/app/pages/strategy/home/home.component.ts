import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Matriz(){
    this.router.navigate(['/matrices']);
  }
  Actores(){
    this.router.navigate(['/actores']);
  }
  Temas(){
    this.router.navigate(['/temas']);
  }

}
