import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Album } from '../../model/Album.model';

@Component({
  selector: 'app-main-intro',
  templateUrl: './main-intro.component.html',
  styleUrls: ['./main-intro.component.css']
})
export class MainIntroComponent implements OnInit {
  //@Output() albumSelected  = new EventEmitter<Album>();
  albumToView : Album;


  constructor() { }

  ngOnInit() {
  }

  onAlbumSelected(album:Album){
      console.log(`MainIntroComponent -> onAlbumSelected(${album._id})`);
      this.albumToView = album;
      // this.albumSelected.emit(album);
  }

  onNavRec(nav:String){
    console.log(`onNavRec -> ${nav}`);
    if(nav==="home" || nav==="favorite"){
       this.albumToView = null;
    }
  }
}
