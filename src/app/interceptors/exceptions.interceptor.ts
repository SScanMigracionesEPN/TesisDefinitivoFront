import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '@services/core/toast.service';
import { MessageService } from 'primeng/api';
import { catchError, tap, throwError } from 'rxjs';


export const exceptionsInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService).serverDisconected();
  
  
  return next(req).pipe(tap(event => {
    if (event.type !== HttpEventType.Response) {
      // toast.serverDisconected();
      console.log(req.url, 'returned a response with status', event.type);
      
    }
  }));
};
