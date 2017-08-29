import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../../model/Album.model';
import {AlbumService} from '../../app.AlbumService';
import {CurrentAlbum} from '../current-album';
import 'rxjs/add/operator/toPromise';
// import { PlayerComponent } from '../../main/player/player.component';



@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Output() albumSelected  = new EventEmitter<Album>();
   @Input() album : Album;
  
  constructor(private currAlbumSer : CurrentAlbum,
            private albumService : AlbumService) { 
  }

  ngOnInit() {

  }

  onSelected(){
    console.log(`AlbumItemComponent -> onSelected(${this.album._id})`);
    this.albumSelected.emit(this.album);

      // console.log(`click()-> ${this.album._id}`);


       // this.currAlbumSer.change2(this.album);
       // this.playerSer.onSelectedAlbum(this.album);
      

      // this.albumSelected.emit(this.album);
      // this.albumService.getAlbumById2(this.album._id)
      //   .then( (albm : Album[]) =>{
      //     if(albm){
      //       this.albm = albm;
      //       console.log(`${this.albm[0]}`);
      //       //console.log(`res -> ${albm}`);
      //       //this.album = albm[0];
      //       //console.log(`this.album._id -> ${this.album._id}`);
      //     } else {
      //       console.log('xx');
      //     }
          
      //       // console.log(`afterClick -> : ${res._id}`);
      //       // console.log(`afterClick -> : ${res[0]._id}`);
      //       // console.log(`afterClick -> : ${res._id[0]}`);
      //       // console.log(`afterClick -> : ${res[0]._id[0]}`);
      //       // this.album = res[0];
      //   });
  }


    getSelctedAlbum(){
      console.log(`AlbumItemComponent -> getSelctedAlbum()-> ${this.album._id}`)
      return this.album;
    }


}
