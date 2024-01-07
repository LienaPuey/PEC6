import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private articles:Article[];
  private nextId: number = 1;
  constructor() { 
    this.articles =[
      {id: 1, name: "Camiseta de mujer",  imageUrl:'../../assets/camiseta_mujer.jpeg', price: 12.50, isOnSale: true, quantityInCart: 0},
      {id: 2, name: "Pantalones vaqueros",  imageUrl:'../../assets/vaqueros.jpg', price: 25, isOnSale: false, quantityInCart: 0},
      {id: 3, name: "Zapatillas",  imageUrl:'../../assets/zapatillas.PNG', price: 35, isOnSale: true, quantityInCart: 0}
    ]
  }

  getArticles(): Observable<Article[]>{
    return of(this.articles);
  }

  changeQuantity(articleID:number, changeInQuantity:number):Observable<Article|null> {
    const foundArticle = this.articles.find(a => a.id === articleID);
    
    if (foundArticle){
      foundArticle.quantityInCart = changeInQuantity;
      return of(foundArticle);
    }
    return of(null);
  }

  create(article:Article):Observable<any>{
    article.id = this.nextId++;
    this.articles.push(article);

    return of({success:true});
  }
}
