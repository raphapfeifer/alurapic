import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations:[PhotoComponent],
    exports:[PhotoComponent],
    imports:[HttpClientModule]
})
export class PhotosModule{}