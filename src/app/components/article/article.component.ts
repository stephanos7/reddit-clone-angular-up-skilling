import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = "row";
  article: Article;

  constructor() { 
    this.article = new Article("Angular 2", "http://angular.io", 0); //parameters expected as defined in model class
  }

  ngOnInit() {
  }

  voteUp():boolean{
    this.article.votes += 1; // access the model-class properties
    return false;
  }
  voteDown():boolean{
    this.article.votes -= 1; // access the model-class properties
    return false;
  }

}
