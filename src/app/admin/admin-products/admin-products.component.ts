import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {


  products$: Observable<product[]>;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();

    this.products$.subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
