import {EventEmitter,Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { User } from './model/user.model';
import {CurrentUser} from './app-shared/current-user';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService{
   user : User;

   constructor(private http:Http,
       private currentUserService : CurrentUser){ 
     this.currentUserService = currentUserService;
     this.user = this.currentUserService.getCurrentUser();
   }

   // signUpUser(){
   //   console.log()
   //   this.user = this.currentUserService.getCurrentUser();
   //   console.log(this.user);
     
   // }

    loginUser(user:string,pass:string, callback:Function){
        console.log(`loginUser() ->user ${user}`);  
        this.http.post('https://defolk.herokuapp.com/login',{'userName':user ,'password':pass})
        .subscribe(
            (res:Response)=>{
                //console.log(`res.status ->`+res.status);
                console.log(`loginUser(good) -> ${res}`);
                callback(res.json());
            },
            error => {
              let code = error.status;
              console.log(`loginUser(bad) -> ${error.status}`);
              callback(code);
              // if(code==405){
              //   alert("wrong password");
              // } else if (code==500) {
              //   alert("user not exists");
              // } else {
              //   alert("another issue");
              // }

              
            });
    }

    checkStatusCode(res:Response){
        console.log(`res.status ->`+res.status);
    }


      


}