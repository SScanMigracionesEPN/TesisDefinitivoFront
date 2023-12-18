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
    // private apollo: Apollo
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

  isFieldInvalid(field: string) {
    // return (
    //   (!this.form.get(field).valid && this.form.get(field).touched) ||
    //   (this.form.get(field).untouched && this.formSubmitAttempt)
    // );
  }

  onSubmit() {

    if (this.form.valid) {
     
      this.msgs = [{severity:'info', summary:'Rechazado', detail:'Credenciales Incorrectos'}];
    }
    this.formSubmitAttempt = true;
  
  }
  create(){
    // this.apollo.watchQuery({
    //   query: GET_USER,
    //   variables: {
    //     name: this.form.value.userName
    //   }
    // }).valueChanges.subscribe((response) => {
    //   this.Users = response.data['users'];
    //   if(Object.keys(this.Users).length === 0){
    //     this.msgs = [{severity:'info', summary:'Rechazado', detail:'Credenciales Incorrectos'}];
    //   }else{
    //     this.authService.login(this.Users);
    //   }
    //  });


  }

  crearUser(){
    this.router.navigate(['register']);
  }

}
