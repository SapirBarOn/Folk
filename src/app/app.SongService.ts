import {EventEmitter,Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Song } from './model/song.model';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SongService{

    private songs:Song[] = [];


constructor(private http:Http){}


getSongs(callback:Function){
            this.http.get('https://defolk.herokuapp.com/getAllSongs')
            .subscribe(
                (res:Response) => {
                    callback(res.json());
                    console.log(this.songs);
                },
                (error =>{
                    console.log(error);
                    callback(null);
                })
            );
    }     

}