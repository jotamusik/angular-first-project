import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");

    console.log("token", token);

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", token)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
