import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavListComponent } from '@shared/components/sidenav-list/sidenav-list.component';







@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,MatSidenavModule,SidenavListComponent,RouterLink],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css',
  
  
  
  
})
export class NavPageComponent {

}


