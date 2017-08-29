import {Song} from './Song.model';
import {Comment} from './Comment.model';

export class Album {
  
  constructor( public _id : string,
               public albumImg:   string,
               public albumName: string,
               public albumImgSub : String,
               public djName: string, 
               public djImg: string, 
               public djImgSub:string,
               public djUrl: string, 
               public followers: Number,
               public comment : [Comment],
               public genre : string,
               public song : [Song],
               public instr : [string],
               public era : [string],
               public env : [string],
               public rythm: Number,
               public likes: Number,
               public rate: Number,
               public albumImgPlayer:string
            ) {
    console.log(`Album constructor`);
  }

}