import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VmessageModule } from "../shared/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[SignInComponent],
    imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule]
})
export class HomeModule{}