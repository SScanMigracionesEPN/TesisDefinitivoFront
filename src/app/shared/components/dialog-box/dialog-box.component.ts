import { Component, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersData } from '../../../models/auth/user.model';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ActorHttpService } from '../../../services/strategy/actor-http.service';



@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    FormsModule, 
    MatButtonModule, 
    ButtonModule, 
    MatInputModule, 
    MatDialogModule
  ],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {

  
  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,
    ) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
