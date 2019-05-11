import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { category } from 'src/app/models/category';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<category[]>;
  constructor(private categoryService: CategoryService, private productService: ProductService) {
    this.categories$ = this.categoryService.getCategories();

    this.categories$.subscribe(res => {
      console.log(res);
    })

  }

  ngOnInit() {


  }

  save(product) {
    this.productService.createProduct(product);
  }

}
