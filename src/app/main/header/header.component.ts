import { Component, OnInit } from '@angular/core';
import {CurrentUser} from '../../app-shared/current-user';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private currentUserService : CurrentUser) { }
  user : User;
  usrname:string;

  ngOnInit() {
      this.user = this.currentUserService.getCurrentUser();
      this.usrname= this.user.getUserName();
  }

}
