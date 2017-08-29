import { Injectable, EventEmitter, Output } from '@angular/core';
import { Album } from '../model/album.model';
import { Song } from '../model/song.model';


@Injectable()
export class CurrentAlbum{
    @Output() currentAlbum : EventEmitter<Album[]> = new EventEmitter();
    albums:Album[];
    songs:Song[];
    album:Album;
    constructor(){}

    change(album:Album[]){
        this.currentAlbum.emit(album);
        this.albums = album;
        this.songs=this.albums[0].song;
        console.log(`CurrentAlbum ID(${album[0]._id}) change click`);
    }

    getValue(){
         console.log(`CurrentAlbum-> getValue() ->this.albums[0] ${this.albums[0].albumName}`);
        // return this.currentAlbum;
        return this.albums;
    }

    getSongs(){
        return this.songs;
    }

    change2(album:Album){
        console.log(`CurrentAlbum-> change2()-> ${album.albumName}`);
        this.album = album;
    }

    getValue2(){
        console.log(`CurrentAlbum-> getValue2()-> ${this.album.albumName}`);
        return this.album;
    }
}


export class CurrentSong{
    CurrentSong = new EventEmitter<Song>();

    constructor(){}

    change(song:Song){
        this.CurrentSong.next(song);
        console.log(`CurrentSong ID(${song._id}) change click`);
    }

    getValue(){
        return this.CurrentSong;
    }
}