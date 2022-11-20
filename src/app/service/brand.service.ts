import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BrandModel } from "app/model/brand.model";
import { authHeader } from "./auth-header.service";

@Injectable()

export class BrandService{
  constructor(private http: HttpClient, private _authHeader: authHeader) { }


  brands: BrandModel[] = []

  async getAllBrand() {
    this.brands = []
    let httpOptions = {
      headers: this._authHeader.authheader('token')
    }
    await this.http.get('https://tgi.final.kunapheap.com/brand', httpOptions).toPromise().then((res: any) => {
      this.brands = []
      res.forEach((r: any) => {
        this.brands.push(r)
      })
    })
    return this.brands
  }
}
