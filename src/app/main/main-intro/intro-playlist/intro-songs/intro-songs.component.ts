import { Component, OnInit , Input,  Output, EventEmitter } from '@angular/core';
import { Song } from '../../../../model/song.model';
import {SongService} from '../../../../app.SongService'
import { PlayerComponent } from '../../../../main/player/player.component';

@Component({
  selector: 'app-intro-songs',
  templateUrl: './intro-songs.component.html',
  styleUrls: ['./intro-songs.component.css']
})
export class IntroSongsComponent implements OnInit {

  @Input() songs : Song[] =[];
  @Output() songSelected  = new EventEmitter<Song>();
  // @Input() song : Song;

  private play :boolean =false;
  player: YT.Player;
  public id: string;
  isPlayed:boolean =false;

  constructor(private SongService:SongService,
    private playerSer:PlayerComponent) { }

  ngOnInit() {
    // this.id = this.songs[0].youtubeID;
    // this.isPlayed =true;
  }
  
  onPlayClick(song:Song){
    console.log(`IntroSongsComponent -> onSongClick(${song._id})`);
    // this.songSelected.emit(song);
    this.isPlayed = true;
    this.player.loadVideoById(song.youtubeID);

  }

  onPuseClick(song:Song){
    this.isPlayed = false;
    this.player.pauseVideo();
  }

  savePlayer (player) {
    this.player = player;
    this.player.playVideo();
    console.log('player instance', player)
    }

  onStateChange(event){
    console.log('onStateChange->player state', event.data);
    // event.id = this.songs[1].youtubeID;
  }


}
