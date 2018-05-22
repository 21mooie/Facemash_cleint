import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    intercept(req, next){
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjAyMTk1NDcwYzZhYTMyMmQ4NDNkMzkifQ.S1ztsrWQp68G4qC_Cx_tbvGQSpB0pXEGJciAlDdMh0M')
        })
        return next.handle(authRequest);
    }

}