import {EventEmitter,Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Comment } from './model/comment.model';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CommentService{

    private comments:Comment[] = [];


constructor(private http:Http){}


getComments(callback:Function){
            this.http.get('https://defolk.herokuapp.com/getAllComments')
            .subscribe(
                (res:Response) => {
                    callback(res.json());
                    console.log(this.comments);
                },
                (error =>{
                    console.log(error);
                    callback(null);
                })
            );

    }   

}