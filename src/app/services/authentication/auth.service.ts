import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/strategy';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  Users: User[] = []
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    // private apollo: Apollo
  ) {}

  login(user: User) {
      localStorage.setItem("Usuario", JSON.stringify(user));
      this.loggedIn.next(true);
      this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem("Usuario");
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
