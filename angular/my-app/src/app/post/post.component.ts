import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  show=true;
  
  
  expandCollapseHandler(){
    this.show=!this.show;
  }
  

}
