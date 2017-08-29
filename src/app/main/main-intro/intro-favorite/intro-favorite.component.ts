import { Component, Input, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { AlbumService } from '../../../app.AlbumService';
import { Album } from '../../../model/Album.model';
import {CurrentUser} from '../../../app-shared/current-user';
import { User } from '../../../model/user.model';
import { CurrentAlbum} from '../../../app-shared/current-album';
// import { PlayerComponent } from '../../../main/player/player.component';


@Component({
  selector: 'app-intro-favorite',
  templateUrl: './intro-favorite.component.html',
  styleUrls: ['./intro-favorite.component.css']
})

@Injectable()
export class IntroFavoriteComponent implements OnInit {
  @Output() albumSelected  = new EventEmitter<Album>();
  user : User;
  @Input() albums : Album[] ;

  constructor(private AlbumService:AlbumService,
      private currentUserService : CurrentUser,
       private currentAlbums:CurrentAlbum) {
       // private playerSer:PlayerComponent
    this.currentAlbums = currentAlbums;
    this.albums = this.currentAlbums.getValue();
    this.user = this.currentUserService.getCurrentUser();
  }

  ngOnInit() {
  }

  onAlbumClick(album:Album){
    console.log(`IntroFavoriteComponent -> onAlbumClick(${album.albumName})`);
    this.albumSelected.emit(album);

    // this.currentAlbums.change2(album);
    // this.playerSer.onSelectedAlbum(this.currentAlbums);
  }
}
