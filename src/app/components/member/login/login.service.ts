import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";


export interface SignupResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class LoginService{

    user = new Subject<User>();

    constructor(
        private http:HttpClient
    ){}

    signup(email : string, password : string){
        return this.http.post<SignupResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDebfaRseUzVRwvC3kpnBz1chqDxCAOKu8',
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError), tap(resData => {
                this.handleAuthentication(
                    resData.email, 
                    resData.localId, 
                    resData.idToken,
                    +resData.expiresIn
                );
            }
        ));
    }
    
    
    login(email: string, password: string){
        return this.http.post<SignupResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDebfaRseUzVRwvC3kpnBz1chqDxCAOKu8',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(resData => {
                this.handleAuthentication(
                    resData.email, 
                    resData.localId, 
                    resData.idToken,
                    +resData.expiresIn
                );
            }));
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn : number){
        const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        const user = new User(
            email, 
            userId, 
            token, 
            expirationDate
        );
        this.user.next(user);
    }

    private handleError(errorRes : HttpErrorResponse){
        let errorMessage = 'An unknown error Occurred!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                {
                    errorMessage = 'This email already exists.';
                    break;  
                } 
            case 'EMAIL_NOT_FOUND':
                {
                    errorMessage = 'No account found using this email address.';
                    break;
                }
                
            case 'INVALID_PASSWORD':
                {
                    errorMessage = 'The password is incorrect.';
                    break;
                }
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                {
                errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
                break;
                }
          }
        return throwError(errorMessage);
    }
}