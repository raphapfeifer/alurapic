import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TokenService } from "../token/token.service";
import { User } from "./user";
import * as jtw_decode from "jwt-decode";

@Injectable({providedIn: 'root'})
export class UserService{

    private userSubject = new Subject<User>();
    constructor(private tokenService: TokenService){
        this.tokenService.hasToken() && 
            this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userSubject.next(user);
    }

}