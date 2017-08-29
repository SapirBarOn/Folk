import { Component, OnInit, Input, Output } from '@angular/core';
import { Era } from '../../../model/Era.model';
import { User } from '../../../model/user.model';
import {CurrentUser} from '../../../app-shared/current-user';
import { Circle } from '../../../model/circle.model';


@Component({
  selector: 'app-era',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {

    user:User;
    eras:String[];
    choosed:boolean;
    buttonFlag : number = 0 ;

    circles : Circle[] =[
      new Circle ("../../../../assets/images/circle1.png", 45 , -255 ),
      new Circle ("../../../../assets/images/circle1.png", 45 , -205 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -155 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -105 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -55 ),
    ];
        era : Era[] =[
        new Era ("../../../../assets/images/2017.png","../../../../assets/images/2017.png","../../../../assets/images/_2017.png" , 251 , -95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2017",0),
        new Era ("../../../../assets/images/2010.png","../../../../assets/images/2010.png","../../../../assets/images/_2010.png" ,345 ,-95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2010",1),
        new Era ("../../../../assets/images/2000.png","../../../../assets/images/2000.png","../../../../assets/images/_2000.png" ,445 ,-95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2000",2),
        new Era ("../../../../assets/images/90's.png","../../../../assets/images/90's.png","../../../../assets/images/_90.png" ,545,-95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "90's",3),
        new Era ("../../../../assets/images/80's.png","../../../../assets/images/80's.png","../../../../assets/images/_80.png" ,645 ,-95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "80's",4),
        new Era ("../../../../assets/images/70's.png","../../../../assets/images/70's.png","../../../../assets/images/_70.png" ,745 ,-95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "70's",5),
        new Era ("../../../../assets/images/60's.png","../../../../assets/images/60's.png","../../../../assets/images/_60.png" ,845 ,-95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "60's",6),
        new Era ("../../../../assets/images/50's.png","../../../../assets/images/50's.png","../../../../assets/images/_50.png" ,942 ,-95 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "50's",7),
    ];

  constructor(private currentUserService : CurrentUser) {
    // console.log(`EraComponent -> constructor()`);
    this.user = this.currentUserService.getCurrentUser();
    //currentUserService.change(this.newUser);

  }


  ngOnInit() {
      // console.log(`EraComponent -> ngOnInit()`);
      this.eras=new Array(8);
      this.user.setEra(this.eras);
      // this.eras[0]="temp";
  }

  choose(era : Era){
      console.log(`choose(${era})`);
      if(era.ImgCurrent==era.ImgSrcBefore){
          era.ImgCurrent=era.ImgSrcAfter;
          era.DotCurrent=era.DotAfter;
          this.user.getEra()[era.index] = era.text;
          this.buttonFlag++;
      }
      else if(era.ImgCurrent==era.ImgSrcAfter){
          this.user.getEra()[era.index] = null;
          era.ImgCurrent=era.ImgSrcBefore;
          era.DotCurrent=era.DotBefore;
          this.buttonFlag--;
      }
      console.log(`eras array : ${this.eras}`);

      if (this.buttonFlag != 0) this.choosed = true;
      else  this.choosed = false;
      console.log (`erasCheck -> ${this.eras}`);      
      console.log (`choosed -> ${this.choosed}`);
  }




}



