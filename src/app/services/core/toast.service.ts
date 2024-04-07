import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessageServerity } from '@shared/enums/message-severity.enum';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private router: Router,
    private messageService: MessageService 
    ) { }

  serverDisconected(){
    this.messageService.add({
      severity: MessageServerity.ERROR,
      summary: 'Error de conexion',
      detail: "No se pudo establecer conexion con el servidor"

    });
  }
  
  redirectTo(): string {
    this.router.navigate(['register']);
    return "Hello";
  }
}
