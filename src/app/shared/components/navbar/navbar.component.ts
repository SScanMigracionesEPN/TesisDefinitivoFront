import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/authentication/auth.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConfirmationService } from 'primeng/api';
import { RouterLink} from '@angular/router';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule ,MatIconModule,MatToolbarModule ,RouterLink],
  providers:[ConfirmationService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() public sidenavToggle = new EventEmitter();
  isLoggedIn$: Observable<boolean>;

  constructor(
    private confirmation: ConfirmationService,
    private router: Router,
    private authService: AuthService
    ) {
      this.isLoggedIn$ = this.authService.isLoggedIn;


     }

     redirectToHome ():void{
      this.router.navigate(['inicio'])
    }

    redirectToActor ():void{
      this.router.navigate(['actores'])
    }
    redirectToTopic ():void{
      this.router.navigate(['tema'])
    }
    redirectToMatrix ():void{
      this.router.navigate(['matrices'])
    }



  ngOnInit(): void {
    
  }

  confirmDropDatabaseDialogVisible = false;

  dropDatabase(event: Event) {
    if (event.defaultPrevented) return;
    event.preventDefault();

    this.confirmation.confirm({
      key: 'confirm-drop-database',
      message: 'Are you sure to remove all data?',
      accept: () => { this._dropDatabase(); },
      reject: () => { this.old();}
    });
  }

  private _dropDatabase() {
    console.log('NUEVO');
    this.router.navigate(['/matriz']);
  }

  private old(){
    console.log('OLD')
  }

  onLogout() {
    this.authService.logout();
  }

  public onToggleSidenav = () =>{
    this.sidenavToggle.emit();
  }

}
