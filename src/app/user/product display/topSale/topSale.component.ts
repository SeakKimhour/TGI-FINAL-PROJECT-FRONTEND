import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-topSale',
  templateUrl: './topSale.component.html',
  styleUrls: ['./topSale.component.css']
})
export class TopSaleComponent implements OnInit {

  constructor(private _productService : ProductService) { }

  listProduct : any = []

  async ngOnInit() {
    this.listProduct = await this._productService.getAllProduct()
  }

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
