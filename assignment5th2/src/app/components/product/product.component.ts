import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductsService } from './../../products.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = [];

  constructor(private _ProductService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.products = this._ProductService.getProducts()
  }

  routetoproduct(productname: object) {
    
    this.router.navigate(['/productdetail', productname]);
  }
}
