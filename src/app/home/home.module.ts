import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VmessageModule } from "../shared/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";

@NgModule({
    declarations:[SignInComponent, SignUpComponent],
    imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule, FormsModule]
})
export class HomeModule{}