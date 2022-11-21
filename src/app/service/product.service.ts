import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ProductModel } from "app/model/item.model";
import { authHeader } from "./auth-header.service";

@Injectable()
export class ProductService {

  constructor(private _router: Router, private http: HttpClient, private _authHeader: authHeader) { }

  products: ProductModel[] = []

  async getAllProduct() {
    this.products = []
    let httpOptions = {
      headers: this._authHeader.authheader('token')
    }
    await this.http.get('https://tgi.final.kunapheap.com/product', httpOptions).toPromise().then((res: any) => {
      this.products = []
      res.forEach((r: any) => {
        this.products.push(r)
      })

    })
    return this.products
  }

  createProduct(product: any) {
    let httpOptions = {
      headers: this._authHeader.authheader('token'),
    }
    this.http.post('https://tgi.final.kunapheap.com/product', product, httpOptions)
      .toPromise()
      .then((res: any) => {
        this._router.navigate(['/home'])
      })
  }
  findProductById(id:any){
    let httpOptions = {
      headers: this._authHeader.authheader('token'),
    }
   return  this.http.get('https://tgi.final.kunapheap.com/product/getById?id='+id, httpOptions)

  }
}
