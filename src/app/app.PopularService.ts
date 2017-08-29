import {EventEmitter,Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Popular } from './model/popular.model';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PopularService{

    private popular:Popular[] = [];

    constructor(private http:Http){}

    getPopularAlbums(callback:Function){
            this.http.get(`https://defolk.herokuapp.com/getPopularAlbums`)
            // this.http.get('https://defolk-ws.herokuapp.com/getAllAlbums','')
            .subscribe(
                (res:Response) => {
                    callback(res.json());
                    console.log(this.popular);
                },
                (error =>{
                    console.log(error);
                    callback(null);
                })
            );
    }  

}