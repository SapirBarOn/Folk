import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../app.AlbumService';
import { UserAlbum } from '../../../model/UserAlbum.model';
import {CurrentUser} from '../../../app-shared/current-user';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-intro-albums',
  templateUrl: './intro-albums.component.html',
  styleUrls: ['./intro-albums.component.css']
})

export class IntroAlbumsComponent implements OnInit {

  user : User;

  userAlbums : UserAlbum[] =[];

  constructor(private AlbumService:AlbumService,
      private currentUserService : CurrentUser) { 
    this.currentUserService = currentUserService;
  }

  ngOnInit() {
    // this.user = this.currentUserService.getCurrentUser();
    // this.AlbumService.getSignUpUser(this.user,result=>{
    //   this.userAlbums = result;
    //   console.log(`IntroAlbumsComponent ->ngOnInit() -> ${this.userAlbums}`);
    // });
    
      this.AlbumService.getUserAlbums(result=>{
      this.userAlbums=result;
      console.log(this.userAlbums);
    });     
  }

}
