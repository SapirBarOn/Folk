import { Component, OnInit } from '@angular/core';
import { Instrument } from '../../../model/instrument.model';
import {CurrentUser} from '../../../app-shared/current-user';
import { User } from '../../../model/user.model';
import { Circle } from '../../../model/circle.model';



@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})

export class InstrumentComponent implements OnInit {
    buttonFlag:number =0;
    choosed:boolean;
    user:User;

    circles : Circle[] =[
      new Circle ("../../../../assets/images/circle1.png", 45 , -218 ),
      new Circle ("../../../../assets/images/circle1.png", 45 , -168 ),
      new Circle ("../../../../assets/images/circle1.png", 45 , -118 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -68 ),
      new Circle ("../../../../assets/images/circle.png", 45 , -18 ),
    ];

    instruments:String[];
    instrument : Instrument[] =[
    new Instrument ("../../../../assets/images/violin.png","../../../../assets/images/violin.png","../../../../assets/images/_violin.png", 230 , -175 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "Violin",0),
    new Instrument ("../../../../assets/images/bouzouki.png","../../../../assets/images/bouzouki.png","../../../../assets/images/_bouzouki.png",420 ,-70 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "bouzouki",1),
    new Instrument ("../../../../assets/images/drum.png","../../../../assets/images/drum.png","../../../../assets/images/_drum.png",525 ,-255 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "drums",2),
    new Instrument ("../../../../assets/images/quena.png","../../../../assets/images/quena.png","../../../../assets/images/_quena.png",600 ,-62 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "Quena",3),
    new Instrument ("../../../../assets/images/guitar.png","../../../../assets/images/guitar.png","../../../../assets/images/_guitar.png",690 ,-230 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "Guitar",4),
    new Instrument ("../../../../assets/images/panflute.png","../../../../assets/images/panflute.png","../../../../assets/images/_panflute.png",850 ,-55 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "panflute",5),
    new Instrument ("../../../../assets/images/piano.png","../../../../assets/images/piano.png","../../../../assets/images/_piano.png",995 ,-175 ,"../../../../assets/images/dotBefore.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "piano",6),

    ];

  constructor( private currentUserService : CurrentUser ){
    this.currentUserService = currentUserService;
    this.user = this.currentUserService.getCurrentUser();
    console.log(`InstrumentComponent -> constructor() -> ${this.user.getInstr()}`);
  }

  ngOnInit() {
      this.instruments=new Array(7);
      this.user.setInstr(this.instruments);
  }

  choose(instrument : Instrument){
      console.log(`choose(${instrument})`);
      if(instrument.ImgCurrent==instrument.ImgSrcBefore){
          instrument.ImgCurrent=instrument.ImgSrcAfter;
          instrument.DotCurrent=instrument.DotAfter;
          this.user.getInstr()[instrument.index] = instrument.text;
          this.buttonFlag++;
      }
      else if(instrument.ImgCurrent==instrument.ImgSrcAfter){
          this.user.getInstr()[instrument.index] = null;
          instrument.ImgCurrent=instrument.ImgSrcBefore;
          instrument.DotCurrent=instrument.DotBefore;
          this.buttonFlag--;
      }
      console.log(`instrument array : ${this.instruments}`);

      if (this.buttonFlag != 0) this.choosed = true;
      else  this.choosed = false;
      console.log (`erasCheck -> ${this.instruments}`);      
      console.log (`choosed -> ${this.choosed}`);
  }


}