import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../model/Album.model';


@Component({
  selector: 'app-intro-playlist',
  templateUrl: './intro-playlist.component.html',
  styleUrls: ['./intro-playlist.component.css']
})
export class IntroPlaylistComponent implements OnInit {
    @Input() albumDetails : Album;
    rate:Number ;
    
  constructor() { }

  ngOnInit() {
      // this.rate= this.albumDetails.rate;
      // console.log(`rate-> ${this.albumDetails.rate}`);
  }

}
