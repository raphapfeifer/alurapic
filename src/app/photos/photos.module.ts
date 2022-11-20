import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photo-list/photos-list.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";

@NgModule({
    imports:[
            PhotoModule,
            PhotoListModule,
            PhotoFormModule]
})
export class PhotosModule{}