import {EventEmitter,Injectable} from '@angular/core';
import {Http, Response, RequestOptions,Headers} from '@angular/http';
import { Album } from './model/album.model';
import { User } from './model/user.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";


import { UserAlbum } from './model/userAlbum.model';


@Injectable()
export class AlbumService{




    private albums:Album[] = [];
    private popular:Album[] = [];
    private albumById : Album;

    private userAlbum : UserAlbum[] =[];

    private url : String = "http://localhost:3000";

    constructor(private http:Http){
        // this.url  ="http://localhost:3000";
    }

    getAlbumById2(id:String):Promise<Album[]>{
        console.log(`getAlbumById2(${id})`);
        const body = {albumId: id} ;
        return this.http.post('https://defolk.herokuapp.com/getAlbumById2',{albumId:id})
            .toPromise()
            .then(response => response.json() as Album[])
            .catch(err => err.json());
    }

    getAlbumById(id:String,callback:Function){
            console.log(`getAlbumById(${id})`);
            const body = {'albumId': id} ;
            this.http.post('https://defolk.herokuapp.com/getAlbumById',body)
            // this.http.get('https://defolk-ws.herokuapp.com/getAllAlbums','')
            .subscribe(
                (res:Response) => {
                    console.log(`getAlbumById - res : ${res}`);
                    this.albumById = res.json();
                    callback(res.json());
                    console.log(this.albumById);
                },
                (error =>{
                    console.log(error);
                    console.log(`getAlbumById - error : ${error}`);
                    callback(null);
                })
            );
    }


   getSignUpUser(user:User, callback:Function){
        console.log(`getSignUpUser() ->user ${user.getRythm()}`); 
        const body={'email' : user.getEmail(),
                    'userName' : user.getUserName(),
                    'password' : user.getPassword(),
                    'era' : [user.getEra()],
                    'instr' : [user.getInstr()],
                    'env' : [user.getEnv()],
                    'rythm' : user.getRythm()};    
        this.http.post('https://defolk.herokuapp.com/signUpUser',body)
        .subscribe(
            (res:Response)=>{
                console.log(`getSignUpUser(good) -> ${res}`);
                callback(res.json());
            },
            error => {
                console.log(`getSignUpUser(bad) -> ${error}`);
                console.log(error);
                callback(null);
            });
    }




    getAlbums(callback:Function){
            this.http.get(`https://defolk.herokuapp.com/getAllAlbums`)
            // this.http.get('https://defolk-ws.herokuapp.com/getAllAlbums','')
            .subscribe(
                res => {
                    console.log(`getAlbums-> ${res.json}`);
                    callback(res.json());
                }
                // ,
                // (error =>{
                //     console.log(error);
                //     callback(null);
                // })
            );
    }  

    getPopularAlbums(callback:Function){
            this.http.get('https://defolk.herokuapp.com/getPopularAlbums')
            // this.http.get('https://defolk-ws.herokuapp.com/getAllAlbums','')
            .subscribe(
                (res:Response) => {
                    callback(res.json());
                    console.log(this.albums);
                },
                (error =>{
                    console.log(error);
                    callback(null);
                })
            );
    }  


    getUserAlbums(callback:Function){
            this.http.get('https://defolk.herokuapp.com/getUserAlbums')
            // this.http.get('https://defolk-ws.herokuapp.com/getAllAlbums','')
            .subscribe(
                (res:Response) => {
                    callback(res.json());
                    console.log(this.userAlbum);
                },
                (error =>{
                    console.log(error);
                    callback(null);
                })
            );
    }  

}