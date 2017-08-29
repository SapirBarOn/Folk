import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Album } from '../../../model/Album.model';

@Component({
  selector: 'app-intro-nav',
  templateUrl: './intro-nav.component.html',
  styleUrls: ['./intro-nav.component.css']
})
export class IntroNavComponent implements OnInit {
   @Output() onNavSelected  = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onNavSelectedClick(url:String){
      console.log(`IntroNavComponent-> onNavSelectedClick(${url})`);
      this.onNavSelected.emit(url);
  }

}
