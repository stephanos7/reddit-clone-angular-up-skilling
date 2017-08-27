import { Component } from '@angular/core';
import { Article } from "./components/article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Article[];

  constructor() { this.articles = [
    new Article('Angular 2', 'http://angular.io', 3),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`); 
    this.articles.push(new Article(title.value, link.value, 0)); //create a new Article instance with the submitted title and URL as per the model-class contract. Add it to the array of Articles and
    title.value = '';   // clear the input field value for "title"
    link.value = '';    // clear the input field value for "link"
    return false;       // prevent page load-refresh
  }
}
