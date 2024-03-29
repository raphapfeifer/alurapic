import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs";
import { Alert, AlertType } from "./alert";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    
    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouteChange = false;

    constructor(private router: Router){
        if(event instanceof NavigationStart){
            if(this.keepAfterRouteChange){
                this.keepAfterRouteChange = false;
            }else{
                this.clear();
            }
        }
    }

    sucess(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
    }

    warnning(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.WARNING, message,keepAfterRouteChange);
    }

    danger(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.DANGER, message,keepAfterRouteChange);
    }

    info(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlertType.INFO, message,keepAfterRouteChange);
    }

    private alert(alertType: AlertType, message: string,keepAfterRouteChange: boolean = false){
        this.keepAfterRouteChange =  keepAfterRouteChange;
        this.alertSubject.next(new Alert(alertType,message));
    }

    getAlert(){
        return this.alertSubject.asObservable();
    }

    clear(){
        this.alertSubject.next(null);
    }

}