import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-main',
  templateUrl: './enter-main.component.html',
  styleUrls: ['./enter-main.component.css']
})
export class EnterMainComponent implements OnInit {

    isPlayed:boolean=true;
    player: YT.Player;
    public id: string = "rGIAQm-ixAQ";

  constructor() { }

  ngOnInit() {
  }

  savePlayer (player) {
    this.player = player;
    this.player.playVideo();
    console.log('player instance', player)
    }

  onClick(){
    if(this.isPlayed)  {
      this.isPlayed=false;
      this.player.mute();
    }
    else{
      this.isPlayed=true;
      this.player.unMute();
    }
  }

  onStateChange(event){
    console.log('onStateChange->player state', event.data);
    // event.id = this.songs[1].youtubeID;
  }
}
