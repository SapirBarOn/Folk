import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';

import {CurrentUser} from '../../../app-shared/current-user';
import { User } from '../../../model/user.model';
import {UserService} from '../../../app.UserService';
import { Router } from '@angular/router';
import { CurrentAlbum} from '../../../app-shared/current-album';
import { AppComponent } from '../../../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user:User;
    response:String;

    @ViewChild('usrname') usrnameInputRef : ElementRef;
    @ViewChild('pass') passInputRef : ElementRef;

  constructor(private UserService : UserService,
    private currentUserService : CurrentUser,
    private router:Router,
    private currentAlbums:CurrentAlbum,
    private appComponent:AppComponent) {

  }

  ngOnInit() {
  }

  findUser(){
      this.UserService.loginUser(this.usrnameInputRef.nativeElement.value,
           this.passInputRef.nativeElement.value,result=>{
             if(!isNaN(result)){
                 let code = result;
                 if(code==405){
                   this.response = "wrong password";
                  } else if (code==500) {
                   this.response = "user not exists";
                  } else {
                   this.response = "another issue";
                  }
             } else {
                console.log(`loginUser -> ${result}`);
                // this.user = result;
                // this.currentUserService.change(this.user);
                let user = new User();
                user.setUserName(this.usrnameInputRef.nativeElement.value);
                user.setPassword(this.passInputRef.nativeElement.value);
                this.appComponent.onchange(user);
                this.currentAlbums.change(result);
                this.currentUserService.change(user);
                this.router.navigateByUrl('/main');
             }
        });
    }
}