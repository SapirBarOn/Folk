import { Component, OnInit, Input, Output } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { Album } from '../../../model/Album.model';
import {CurrentAlbum} from '../../../app-shared/current-album';


@Component({
  selector: 'app-intro-content2',
  templateUrl: './intro-content2.component.html',
  styleUrls: ['./intro-content2.component.css']
})
export class IntroContent2Component implements OnInit {
   @Input() @Output() content2Album : Album;

  h1:boolean =false;

  constructor(private route:ActivatedRoute,
              private currAlbum : CurrentAlbum) {
      
  }

  ngOnInit() {
      this.route.params.subscribe(
          (params:Params)=>{
             console.log(`Album ID Param -> ${params['id']}`);
          });


      if (this.h1 == false) this.h1= true;
      else this.h1=false;
  }    

}