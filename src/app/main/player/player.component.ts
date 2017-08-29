import { Component, OnInit} from '@angular/core';
import {CurrentAlbum} from '../../app-shared/current-album';
import { Album } from '../../model/album.model';
import { Song } from '../../model/song.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  albums:Album[];
  songs:Song[];
  album:Album;
  songPlayed:Song;
  isPlayed:boolean;
  player:YT.Player;
  public id: string;
  indexPlayed:number;
  currTime:number=0;

  flag:number=0;

  constructor(private currentAlbum:CurrentAlbum) {}

  ngOnInit() {
        this.albums=this.currentAlbum.getValue();
        // console.log(`PlayerComponent-> constructor()-> ${this.albums[0].albumName}`);
        this.album=this.albums[0];
        this.songs=this.currentAlbum.getSongs();
        this.songPlayed=this.songs[0];
        this.id=this.songPlayed.youtubeID;
        this.indexPlayed=0;
        this.isPlayed=true;  
  }


  // onSelectedAlbum(currentAlbum:CurrentAlbum){
  //     this.currentAlbum=currentAlbum;
  //    // if (YT.PlayerState.PLAYING) this.player.stopVideo();
  //    console.log(`PlayerComponent->onSelectedAlbum()->`);
  //    this.album = this.currentAlbum.getValue2();
  //    console.log(`PlayerComponent->onSelectedAlbum()->this.album ->${this.album.albumName}`);
  //    this.songs= this.album.song;
  //    console.log(`PlayerComponent->onSelectedAlbum()->this.song ->${this.songs[0].songName}`);
  //    this.songPlayed=this.songs[0];
  //    console.log(`PlayerComponent->onSelectedAlbum()->this.songPlayed ->${this.songPlayed.songName}`);
  //    this.id=this.songPlayed.youtubeID;
  //    console.log(`PlayerComponent->onSelectedAlbum()->this.id ->${this.id}`);
  //    this.indexPlayed=0;
  //    // this.player = new YT.Player('player', {videoId: this.id})
  //    this.savePlayer(YT.Player); 
  //   }



  savePlayer(player) {
      this.player = player;
      console.log(`this.id-> ${this.id}  this.songPlayd-> ${this.songPlayed.songName}}`);
      this.player.loadVideoById(this.id);
      console.log('player instance', player)
  }

  onStateChange(event) {
    if (event.data == YT.PlayerState.ENDED){
      this.indexPlayed++;
      this.songPlayed=this.songs[this.indexPlayed];
      this.id=this.songPlayed.youtubeID;
      this.player.loadVideoById(this.id);
    }
  }

  onPlayClick(){
    this.isPlayed=true;
    this.player.playVideo();
  }

  onPuseClick(){
    this.isPlayed=false;
    this.player.pauseVideo();
  }

  onForwardClick(){
    if(this.indexPlayed < this.songs.length-1){
        this.player.pauseVideo();
        this.songPlayed=this.songs[this.indexPlayed+1];
        this.id=this.songPlayed.youtubeID;
        this.player.loadVideoById(this.id);
        this.indexPlayed++;     
    }

  }

  onBackwardClick(){
    if(this.indexPlayed >= this.songs.length-1){
        this.player.pauseVideo();
        this.songPlayed=this.songs[this.indexPlayed-1];
        this.id=this.songPlayed.youtubeID;
        this.player.loadVideoById(this.id);
        this.indexPlayed--;
    }
  }

}
