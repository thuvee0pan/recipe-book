import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'

export class LoggingInterceptor implements HttpInterceptor{

    // constructor(private authService:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('intercetor', req);
        return next.handle(req)
            .pipe(tap(
                event =>console.log('Logging Intercetor' , event)
                
            ))
    }
}