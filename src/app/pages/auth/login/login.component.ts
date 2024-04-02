import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  Validators,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { User } from '../../../models/auth/user.model';
import { AuthService } from '../../../services/authentication/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MessagesModule } from 'primeng/messages';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Apollo } from 'apollo-angular';
import { ALL_USERS, FIND_NAME_USER, FIND_ONE_USER } from '@gql/auth/user.gql';
import { AuthHttpService } from '@services/authentication/auth-http.service';
import { convertAllErrors } from '@shared/utils/messages.util';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MessagesModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form: UntypedFormGroup = this.newForm;
  msgs: Message[] = [];
  Users: User[] = [];
  private formSubmitAttempt: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authHttpService: AuthHttpService,
    private router: Router,
    private apollo: Apollo,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    // this.form = this.fb.group({   //fb = form builder
    // });
  }

  get newForm(): UntypedFormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.login()    
    }
  }
  login() {
    this.authHttpService.findByName(this.form.value.userName).subscribe(
      (response) => {
        if (response.errors) {
          
          this.messageService.addAll(convertAllErrors(response.errors, "Rechazado"));
        }else{
          this.authService.login(response.data.findByName);
        }
      }
    )

  }

  isFieldInvalid(validation: string) {}

  crearUser() {
    this.router.navigate(['register']);
  }
}
