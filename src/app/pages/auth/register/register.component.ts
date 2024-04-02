import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UntypedFormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MessagesModule } from 'primeng/messages';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthHttpService } from '@services/authentication/auth-http.service';
import { User } from '@models/strategy';
import { convertAllErrors, successMessage } from '@shared/utils/messages.util';
import { MessageServerity } from '@shared/enums/message-severity.enum';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MessagesModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // form: FormGroup;
  form: UntypedFormGroup = this.newForm;
  private formSubmitAttempt: boolean = false;
  msgs: Message[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthHttpService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  get newForm(): UntypedFormGroup {
    return this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string): boolean {
    return false;
  }

  back() {
    this.router.navigate(['login']);
  }

  register() {
    const user: User = {
      name: this.form.value.userName,
    };

    this.authService.create(user).subscribe((response) => {
      if (response.errors) {
        this.messageService.addAll(convertAllErrors(response.errors));
      } else {
        this.messageService.add(successMessage());
        this.back();
      }
    });
  }


  onSubmit() {
    if (this.form.valid) {
      this.register();
    }

    this.formSubmitAttempt = true;
  }
}
