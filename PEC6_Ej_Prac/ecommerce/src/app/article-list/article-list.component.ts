import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleQuantityChange } from '../article';
import { ArticleServiceService } from '../services/article-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  template: `
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        <div *ngFor="let article of articles | async" >
          <app-article-item [article]="article" (changeQuantity)="onQuantityChange($event)"></app-article-item>
        </div>
      </div>
    </div>
  </div>  
`,
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{

  public articles: Observable<Article[]> | undefined;
  constructor(private articleService : ArticleServiceService){

  }
  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  onQuantityChange(event: ArticleQuantityChange ):void{
    const {article, quantity} = event;

    this.articleService.getArticles().subscribe(articles => {
      const foundArticle = articles.find(a => a.id === article.id);
        if(foundArticle){
          foundArticle.quantityInCart = quantity;
        }
    })
  }
}
