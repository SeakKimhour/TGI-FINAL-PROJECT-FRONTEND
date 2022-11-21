import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-featureProduct',
  templateUrl: './featureProduct.component.html',
  styleUrls: ['./featureProduct.component.css']
})
export class FeatureProductComponent implements OnInit {

  firstProduct : any
  secondProduct : any
  thirdProduct : any
  listProduct : any = []

  constructor(private _productService : ProductService) { }

  async ngOnInit() {
    this.listProduct = await this._productService.getAllProduct()
    this.firstProduct = this.listProduct[Math.floor(Math.random() * this.listProduct.length)]
    this.secondProduct = this.listProduct[Math.floor(Math.random() * this.listProduct.length)]
    this.thirdProduct = this.listProduct[Math.floor(Math.random() * this.listProduct.length)]
  }

}
