import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VmessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { ShowIfLoggedModule } from "src/app/shared/directives/show-if-logged/show-if-logged.module";

@NgModule({
    declarations: [PhotoDetailsComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective],
    exports: [PhotoDetailsComponent, PhotoCommentsComponent],
    imports: [CommonModule,PhotoModule,RouterModule, ReactiveFormsModule, VmessageModule, ShowIfLoggedModule]
})
export class PhotoDetailsModule{}