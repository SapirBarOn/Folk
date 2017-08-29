import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Album } from '../../../model/Album.model';
@Component({
  selector: 'app-intro-content',
  templateUrl: './intro-content.component.html',
  styleUrls: ['./intro-content.component.css']
})
export class IntroContentComponent implements OnInit {
   @Output() albumSelected  = new EventEmitter<Album>();



  constructor() { }

  ngOnInit() {
  }

  onAlbumSelected(album:Album){
      console.log(`IntroContentComponent -> onAlbumSelected(${album._id})`);
      this.albumSelected.emit(album);
  }

}
