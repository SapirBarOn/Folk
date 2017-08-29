import { Component, OnInit, ElementRef, EventEmitter,ViewChild, Output } from '@angular/core';
import { CurrentUser} from '../../../app-shared/current-user';
import { CurrentAlbum} from '../../../app-shared/current-album';
import { User } from '../../../model/user.model';
import { UserService} from '../../../app.UserService';
import { AlbumService } from '../../../app.AlbumService';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';
import { Circle } from '../../../model/circle.model';


@Component({
  selector: 'app-ryhtm',
  templateUrl: './ryhtm.component.html',
  styleUrls: ['./ryhtm.component.css']
})
export class RyhtmComponent implements OnInit {
  @Output() userValid = new EventEmitter<boolean>();
  @ViewChild('rangeInput') rangeInputRef : ElementRef;
  choosed:boolean;
  user:User;
  ryhtm:number;

    circles : Circle[] =[
      new Circle ("../../../../assets/images/circle1.png", -417 , -210 ),
      new Circle ("../../../../assets/images/circle1.png", -417 , -160 ),
      new Circle ("../../../../assets/images/circle1.png", -417 , -110 ),
      new Circle ("../../../../assets/images/circle1.png", -417 , -60 ),
      new Circle ("../../../../assets/images/circle1.png", -417 , -10 ),
    ];

  constructor( private currentUserService : CurrentUser,
        private httpUserService : UserService,
        private AlbumService:AlbumService,
        private currentAlbums:CurrentAlbum,
        private router:Router,
        private appComponent:AppComponent){
    this.httpUserService = httpUserService;
    this.currentUserService = currentUserService;
    this.user = this.currentUserService.getCurrentUser();
  }

  ngOnInit() {
  }

  click(){
      this.user.setRythm(this.rangeInputRef.nativeElement.value);
      this.currentUserService.change(this.user);
      this.currentUserService.available();
      this.user = this.currentUserService.getCurrentUser();
      this.userValid.emit(true);

      this.AlbumService.getSignUpUser(this.user,result=>{
        console.log(`RyhtmComponent -> click() -> AFTER -> ${result}`);
        this.appComponent.onchange(this.user);
        this.currentAlbums.change(result);
        this.router.navigateByUrl('/main');
      });
      // console.log(`RyhtmComponent -> ${this.user.getUserName()}`);
      // console.log(`RyhtmComponent -> ${this.user.getEmail()}`);
      // console.log(`RyhtmComponent -> ${this.user.getPassword()}`);
      // console.log(`RyhtmComponent -> ${this.user.getEra()}`);
      // console.log(`RyhtmComponent -> ${this.user.getEnv()}`);
      // console.log(`RyhtmComponent -> ${this.user.getInstr()}`);
      // console.log(`RyhtmComponent -> ${this.user.getRythm()}`);      
  }

}