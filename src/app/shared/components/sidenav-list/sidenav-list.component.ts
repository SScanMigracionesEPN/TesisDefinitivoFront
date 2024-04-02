import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/authentication/auth.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css',
  providers: [ConfirmationService],
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  isLoggedIn$: Observable<boolean>;

  constructor(
    private confirmation: ConfirmationService,
    private router: Router,
    private authService: AuthService
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  ngOnInit(): void {}

  onLogout() {
    this.authService.logout();
  }

  redirectToActors() {
    this.router.navigate(['actores']);
    this.sidenavClose.emit();
  }


  redirectToHome() {
    this.router.navigate(['']);
    this.sidenavClose.emit();
  }

  redirectToTopics() {
    this.router.navigate(['temas']);
    this.sidenavClose.emit();
  }

  
  redirectToMatrixs() {
    this.router.navigate(['temas']);
    this.sidenavClose.emit();
  }


}
