import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [
    { name: 'Nokia 5.1 plus', Price: 8999, discription: 'Nokia 3GB/32GB' },
    { name: 'Oppo A3s', Price: 9999, discription: 'Oppo 3GB/16GB' },
    { name: 'Vivo v11', Price: 11999, discription: 'Vivo 3GB/32GB' },
    { name: 'Redmi Note6 pro', Price: 15999, discription: 'Redmi 4GB/64GB' },
    { name: 'Oneplus Note7', Price: 37000, discription: 'Oneplus 8GB/128GB' }

  ]
  constructor() { }
  getProduct(productname: string) {
    const filteredProducts =productname ? this.products.filter(product => {
      return product.name == productname;
    }) : this.products;

    return filteredProducts;
  }
  getProducts() {

    return this.products;
  }
}
