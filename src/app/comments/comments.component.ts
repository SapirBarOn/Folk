import { Component, OnInit } from '@angular/core';
import { CommentService } from '../app.CommentService';
import { Comment } from '../model/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    comments: Comment[] = [];

  constructor(private CommentService:CommentService) {}

  ngOnInit() {
        this.CommentService.getComments((c)=>{
        this.comments=c;
        console.log(this.comments);      
      });
    } 
       
}
