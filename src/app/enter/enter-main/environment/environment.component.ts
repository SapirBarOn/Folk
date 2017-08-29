import { Component, OnInit } from '@angular/core';
import { Environment } from '../../../model/environment.model';
import {CurrentUser} from '../../../app-shared/current-user';
import { User } from '../../../model/user.model';
import { Circle } from '../../../model/circle.model';


@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

  buttonFlag:number =0;
  choosed:boolean;
  user:User;
  environments:String[]; 
  environment : Environment[] =[
    new Environment ("../../../../assets/images/live1.png","../../../../assets/images/live1.png","../../../../assets/images/live.png", 475 , 60 , "Live",0),
    new Environment ("../../../../assets/images/studio1.png","../../../../assets/images/studio1.png","../../../../assets/images/studio.png",645 ,60 , "Studio",1),
    ];

    circles : Circle[] =[
      new Circle ("../../../../assets/images/circle1.png", -423 , -90 ),
      new Circle ("../../../../assets/images/circle1.png", -423 , -40 ),
      new Circle ("../../../../assets/images/circle1.png", -423 , 10 ),
      new Circle ("../../../../assets/images/circle1.png", -423 , 60 ),
      new Circle ("../../../../assets/images/circle.png", -423 , 110 ),
    ];
  constructor( private currentUserService : CurrentUser ){
    this.currentUserService = currentUserService;
    this.user = this.currentUserService.getCurrentUser();
    console.log(`EnvironmentComponent -> constructor() -> ${this.user.getEnv()}`);
  }

  ngOnInit() {
      this.environments=new Array(2);
      this.user.setEnv(this.environments);
  }

    choose(environment : Environment){
      console.log(`choose(${environment})`);
      if(environment.ImgCurrent==environment.ImgSrcBefore){
          environment.ImgCurrent=environment.ImgSrcAfter;
          this.user.getEnv()[environment.index] = environment.text;
          this.buttonFlag++;
      }
      else if(environment.ImgCurrent==environment.ImgSrcAfter){
          this.user.getEnv()[environment.index] = null;
          environment.ImgCurrent=environment.ImgSrcBefore;
          this.buttonFlag--;
      }
      console.log(`env array : ${this.environments}`);

      if (this.buttonFlag != 0) this.choosed = true;
      else  this.choosed = false;
      console.log (`envCheck -> ${this.environments}`);      
      console.log (`choosed -> ${this.choosed}`);
  }


}
