import { Component, OnInit ,Input} from '@angular/core';
import { CommentService } from '../../../../app.CommentService';
import { Comment } from '../../../../model/comment.model';

@Component({
  selector: 'app-intro-comments',
  templateUrl: './intro-comments.component.html',
  styleUrls: ['./intro-comments.component.css']
})
export class IntroCommentsComponent implements OnInit {
    
  @Input() comments: Comment[] = [];

  constructor(private CommentService:CommentService) { }

  ngOnInit() {
      //   this.CommentService.getComments((c)=>{
      //   this.comments=c;
      //   console.log(this.comments);      
      // });
  }

}
