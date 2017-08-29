import { Output,Injectable,Component, Input } from '@angular/core';
import {CurrentUser} from './app-shared/current-user';
import { User } from './model/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
      @Input() @Output() mainAvailable:User;

      constructor(private currentUser : CurrentUser){
         this.mainAvailable = this.currentUser.getCurrentUser();
          //this.mainAvailable = false;
          //this.mainAvailable = this.currentUser.getAvailable();
          //this.currentUser = currentUser;
          //this.mainUser = this.currentUser.getCurrentUser();
      }

      onNavSelected(valid:boolean){
          //this.mainAvailable = valid;
      }

      onchange(user:User){
        this.mainAvailable = user;
      }

      OnInit(){
         this.mainAvailable = this.currentUser.getCurrentUser();
      }
}
