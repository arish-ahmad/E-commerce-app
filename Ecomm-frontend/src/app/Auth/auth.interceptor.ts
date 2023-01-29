import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq = req;
        let token = localStorage.getItem("token");
        //const passUrlList = ['http://localhost:8979/product/get-all-popular-products', 'http://localhost:8979/product/product-details/{id}', 'http://localhost:8979/product/all-products', 'http://localhost:8979/product/search/{key}']
        //console.log("header",token)
        
        if (token != null) {
            let headersobj = req.headers.set("Authorization", "Bearer " + token.slice(1, -1))
                newReq = req.clone({ headers: headersobj });
                
        }
       
        return next.handle(newReq);
            
        
        
    


    }
}
