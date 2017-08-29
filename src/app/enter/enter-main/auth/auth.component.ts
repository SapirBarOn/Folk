import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import {CurrentUser} from '../../../app-shared/current-user';
import { User } from '../../../model/user.model';
import {UserService} from '../../../app.UserService';
import { Circle } from '../../../model/circle.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    
    player: YT.Player;
    private id: string = "rGIAQm-ixAQ";

    user : User;

    @ViewChild('usrname') usrnameInputRef : ElementRef;
      @ViewChild('pass') passInputRef : ElementRef;
      @ViewChild('email') emailInputRef : ElementRef;

    circles : Circle[] =[
      new Circle ("../../../../assets/images/circle1.png", 45 , -240 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -190 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -140 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -90 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -40 ),
    ];

  constructor(private currentUserService : CurrentUser) { 
      this.currentUserService = currentUserService;
  }

  ngOnInit() {
  }

  createNewUser(){
      this.user = new User();
      this.user.setUserName(this.usrnameInputRef.nativeElement.value);
      this.user.setPassword(this.passInputRef.nativeElement.value);
      this.user.setEmail(this.emailInputRef.nativeElement.value);
      this.currentUserService.change(this.user);
  }


  onPuseClick(){
    // this.isPlayed = false;
    this.player.mute;
    console.log('AuthComponent-> onPuseClick()');
  }

}
