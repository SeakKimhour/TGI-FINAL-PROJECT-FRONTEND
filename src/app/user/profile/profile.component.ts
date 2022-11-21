import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/service/category.service';
import { LocalService } from 'app/service/local-storage.service';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  list: any = []
  username: string = ""
  constructor(private _productService: ProductService, private local: LocalService) {

  }

  async ngOnInit() {
    this.username = this.local.getUsername("username").username
    this.list = await this._productService.getAllProduct()
  }

}
