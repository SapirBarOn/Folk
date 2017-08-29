import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../app.AlbumService';
import { Album } from '../../../model/Album.model';

@Component({
  selector: 'app-intro-popular',
  templateUrl: './intro-popular.component.html',
  styleUrls: ['./intro-popular.component.css']
})
export class IntroPopularComponent implements OnInit {

  albums : Album[] =[];


  constructor(private AlbumService:AlbumService) { }

  ngOnInit() {
      this.AlbumService.getPopularAlbums(result=>{
      this.albums=result;
      console.log(this.albums);
    });     
  }

}
