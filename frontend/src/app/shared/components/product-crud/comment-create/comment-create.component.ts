
import { CommentService } from '../../../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { CommentData } from 'src/app/shared/models/comment-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  comment: CommentData = {
  
    comment: ''
  };

  constructor(
    private commentService: CommentService,
    private router: Router) {}

  ngOnInit(): void {
  }

  createComment() {
    this.commentService.create(this.comment).subscribe(() => {
      this.commentService.showMessage("Commented!");
      this.router.navigate(['products']);
    });
  }

  cancel() {
    this.router.navigate(['products']);
  }

}



