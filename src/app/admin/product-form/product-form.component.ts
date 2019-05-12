import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { category } from 'src/app/models/category';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productId: string;
  product = {};
  categories$: Observable<category[]>;
  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.categories$ = this.categoryService.getCategories();
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(p => {
        this.product = p;
        console.log('Fetching sepefic product', p);
      })

    }
    this.categories$.subscribe(res => {
      console.log(res);
    })

  }
  ngOnInit() {


  }
  save(product) {
    this.productService.createProduct(product);
    this.router.navigate(['/admin/products']);
  }
}
