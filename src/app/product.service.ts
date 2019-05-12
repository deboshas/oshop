import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { product } from './models/product';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  createProduct(product) {
    return this.db.list("/products").push(product)
      .then(res => {
        console.log("Product added successfully ", res);
      })
  }

  getProducts(): Observable<product[]> {
    return this.db.list<product>("/products").valueChanges();
  }

  getProduct(productId): Observable<product> {
    return this.db.list<product>("/products").valueChanges()
      .pipe(switchMap(p => {
        return p.filter(p => p.title = productId);
      }))

  }
}
