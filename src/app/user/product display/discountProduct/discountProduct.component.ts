import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discountProduct',
  templateUrl: './discountProduct.component.html',
  styleUrls: ['./discountProduct.component.css']
})
export class DiscountProductComponent implements OnInit {

  constructor(private _productService: ProductService, private route: Router) { }

  listProducts: any = []

  async ngOnInit() {
    this.listProducts = await this._productService.getAllProduct()
  }

  customOptions: OwlOptions = {
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
