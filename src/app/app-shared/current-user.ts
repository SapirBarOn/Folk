import { Injectable, EventEmitter } from '@angular/core';
import { Album } from '../model/album.model';
import { Song } from '../model/song.model';
import { User } from '../model/user.model';

@Injectable()
export class CurrentUser{
    currentUser:User ;
    availableVar:boolean;

    constructor(){
        this.availableVar = false;
    }

    change(user:User){
        // console.log(`change(${user.getId()})`);
        // this.currentUser.next(user);
        this.currentUser = user;
        // console.log(`change(${this.currentUser.getId()})`);
    }

    available(){
        this.availableVar = true;
    }

    getAvailable(){
        return this.availableVar;
    }

    setEra(eras:String[]){

    }

    getCurrentUser(){
        return this.currentUser;
    }
}