import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-blank-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet ],
  templateUrl: './blank-page.component.html',
  styleUrl: './blank-page.component.css'
})
export class BlankPageComponent {

}
