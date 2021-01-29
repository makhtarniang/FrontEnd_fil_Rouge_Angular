import { Injectable} from '@angular/core';
import { JwtService } from './app/server/auth0'
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Interceptor  implements HttpInterceptor {
  

    constructor(private jwtServices:JwtService){}

  intercept (req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>
    {
        const token= localStorage.getItem('token');
        if (token && this.jwtServices.isTokenExpired)
        {
            //Clone chaque requete interceptée et lui ajoute le token
            req = req.clone(
                {
                    headers: new HttpHeaders().set('Authorization', 'Bearer '+ token)
                });
        }
        
    return next.handle(req);

    }
}

export const InterceptorProvider=
{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
}
