import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];
  
constructor(
  private photoService: PhotoService,
  private activatedRoute: ActivatedRoute ){}

    ngOnInit(): void{

      const userName = this.activatedRoute.snapshot.params.userName;
      this.photoService
        .listFromUser(userName)
        .subscribe(
          photos => {
            console.log(photos[1].description);
            this.photos = photos;
          },
          err => console.log(err.message)
        ) ;
    }

}
