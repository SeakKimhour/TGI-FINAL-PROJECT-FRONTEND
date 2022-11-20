import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-newProduct',
  templateUrl: './newProduct.component.html',
  styleUrls: ['./newProduct.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private _poductService : ProductService) { }

  listProduct : any = []

  async ngOnInit() {
    this.listProduct = await this._poductService.getAllProduct()
  }

}
