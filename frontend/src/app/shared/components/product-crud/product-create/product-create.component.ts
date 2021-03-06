import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: ProductData = {
    name: '',
    desc: null,
    liked:true,
    comment: ''
  };

  constructor(
    private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
  }

  createProduct() {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Post successfully inserted!");
      this.router.navigate(['products']);
    });
  }

  cancel() {
    this.router.navigate(['products']);
  }


}
