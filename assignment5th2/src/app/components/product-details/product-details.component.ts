import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../products.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productname: any;
  displayproduct:any;
  constructor(private route: ActivatedRoute, private _productService: ProductsService) { }

  ngOnInit(): void {
    if (this.route) {
      const id = this.route.snapshot.paramMap.get('id')
      this.productname = id;
    }
    this.displayproduct = this._productService.getProduct(this.productname);
    console.log(this.displayproduct);
  }

}
