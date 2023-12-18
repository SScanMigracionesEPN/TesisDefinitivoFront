import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormGroup, FormBuilder, Validators ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthService } from '../../../services/authentication/auth.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MessagesModule } from 'primeng/messages';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatCardModule,MessagesModule,MatButtonModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // form: FormGroup;
  form: UntypedFormGroup = this.newForm;
  private formSubmitAttempt: boolean =false;
  msgs: Message[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    // private apollo: Apollo
  ) { }

  ngOnInit() {
    // this.form = this.fb.group({
    //   userName: ['', Validators.required],
    //   password: ['', Validators.required]
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

  atras(){
    this.router.navigate(['login']);
  }

  onSubmit() {
    if (this.form.valid) {
     
      this.msgs = [{severity:'info', summary:'Rechazado', detail:'Credenciales Incorrectos'}];
    }
    this.formSubmitAttempt = true;
  }  
  

}
