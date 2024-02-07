import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';


export const exceptionsInterceptor: HttpInterceptorFn = (req, next) => {
 
  
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));

  // return next(req).pipe(
  //   catchError(
  //     (error)=>{
  //       return throwError(error.message)
  //     }
  //   )
  // );
};
