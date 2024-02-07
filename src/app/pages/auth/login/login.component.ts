import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { User } from '../../../models/auth/user.model';
import { AuthService } from '../../../services/authentication/auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MessagesModule } from 'primeng/messages';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { Apollo } from 'apollo-angular';
import { ALL_USERS, FIND_ONE_USER } from '@gql/auth/user.gql';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatInputModule, MatCardModule,MatFormFieldModule,MessagesModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  form: UntypedFormGroup = this.newForm;
  msgs: Message[] = [];
  Users: User[] = [];
  private formSubmitAttempt: boolean =false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private apollo: Apollo
  ) {


  }

  ngOnInit() {
    // this.form = this.fb.group({   //fb = form builder
      
    // });


  }

  get newForm(): UntypedFormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {

    if (this.form.valid) {
     
      this.msgs = [{severity:'info', summary:'Rechazado', detail:'Credenciales Incorrectos'}];
    }
    this.formSubmitAttempt = true;
  
  }
  create(){
    this.apollo.watchQuery({
      query: FIND_ONE_USER,
      variables: {
        name: this.form.value.userName
      }
    }).valueChanges.subscribe((response : any) => {
      this.Users = response.data['users'];
      if(Object.keys(this.Users).length === 0){
        this.msgs = [{severity:'info', summary:'Rechazado', detail:'Credenciales Incorrectos'}];
      }else{
        this.authService.login(this.Users);
      }
     });


  }

  isFieldInvalid(validation: string){

  }


  crearUser(){
    this.router.navigate(['register']);
  }

}
