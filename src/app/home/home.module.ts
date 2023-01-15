import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations:[SignInComponent, SignUpComponent],
    imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule, FormsModule]
})
export class HomeModule{}