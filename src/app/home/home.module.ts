import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VmessageModule } from "../shared/vmessage/vmessage.module";

@NgModule({
    declarations:[SignInComponent],
    imports: [CommonModule, ReactiveFormsModule, VmessageModule]
})
export class HomeModule{}