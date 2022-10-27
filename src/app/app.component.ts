import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = [];
  
constructor(photoService: PhotoService){
    photoService.listFromUser('flavio')
    .subscribe(
      photos => this.photos = photos,
      err => console.log(err.message)
      );
  }
}
