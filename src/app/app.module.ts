import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule } from '@angular/router';
import { YoutubePlayerModule } from 'ng2-youtube-player';


import { AppComponent } from './app.component';
import { SongService } from './app.SongService';
import { AlbumService } from './app.AlbumService';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './app.CommentService';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { PlayerComponent } from './main/player/player.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainIntroComponent } from './main/main-intro/main-intro.component';
import { IntroNavComponent } from './main/main-intro/intro-nav/intro-nav.component';
import { IntroFavoriteComponent } from './main/main-intro/intro-favorite/intro-favorite.component';
import { IntroAlbumsComponent } from './main/main-intro/intro-albums/intro-albums.component';
import { IntroPopularComponent } from './main/main-intro/intro-popular/intro-popular.component';
import { AlbumItemComponent } from './app-shared/album-item/album-item.component';
import { EnterComponent } from './enter/enter.component';
import { EnterHeaderComponent } from './enter/enter-header/enter-header.component';
import { EnterMainComponent } from './enter/enter-main/enter-main.component';
import { AuthComponent } from './enter/enter-main/auth/auth.component';
import { EraComponent } from './enter/enter-main/era/era.component';
import { InstrumentComponent } from './enter/enter-main/instrument/instrument.component';
import { EnvironmentComponent } from './enter/enter-main/environment/environment.component';
import { RyhtmComponent } from './enter/enter-main/ryhtm/ryhtm.component';
import { IntroPlaylistComponent } from './main/main-intro/intro-playlist/intro-playlist.component';
import { IntroSongsComponent } from './main/main-intro/intro-playlist/intro-songs/intro-songs.component';
import { IntroCommentsComponent } from './main/main-intro/intro-playlist/intro-comments/intro-comments.component';
import { IntroContentComponent } from './main/main-intro/intro-content/intro-content.component';
import { IntroContent2Component } from './main/main-intro/intro-content2/intro-content2.component';
import {CurrentAlbum} from './app-shared/current-album';
import {CurrentUser} from './app-shared/current-user';
import { LoginComponent } from './enter/enter-main/login/login.component';
import {UserService} from './app.UserService';
import { EnterFooterComponent } from './enter/enter-footer/enter-footer.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/signUp', pathMatch: 'full'},
  // {
  //   path:'enter',
  //     component: EnterComponent,
  //     children:[
  //       {path: 'signUp', component: AuthComponent, outlet:'signUp'}
  //     ]
  // },
  {path: 'signUp', component: AuthComponent},
  {path: 'login', component: LoginComponent},
  {path: 'years', component: EraComponent},
  {path: 'instrument', component: InstrumentComponent},
  {path: 'environment', component: EnvironmentComponent},
  {path: 'ryhtm', component: RyhtmComponent},
  {path: 'content2/:id', component: IntroContent2Component},
  {path: 'main', component: MainIntroComponent},
  {path: 'favorite', component: IntroContentComponent},
  {path: 'home', component: IntroContentComponent},
  {path: 'content2/:id/favorite', component: IntroContentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    MainComponent,
    HeaderComponent,
    PlayerComponent,
    FooterComponent,
    MainIntroComponent,
    IntroNavComponent,
    IntroFavoriteComponent,
    IntroAlbumsComponent,
    IntroPopularComponent,
    AlbumItemComponent,
    EnterComponent,
    EnterHeaderComponent,
    EnterMainComponent,
    AuthComponent,
    EraComponent,
    InstrumentComponent,
    EnvironmentComponent,
    RyhtmComponent,
    IntroPlaylistComponent,
    IntroSongsComponent,
    IntroCommentsComponent,
    IntroContentComponent,
    IntroContent2Component,
    LoginComponent,
    EnterFooterComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule,
  ],
  exports: [RouterModule],
  providers: [
    SongService,
    AlbumService,
    CommentService,
    CurrentAlbum, 
    CurrentUser,
    AppComponent,
    PlayerComponent,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
