import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BrandModel } from "app/model/brand.model";
import { Observable } from "rxjs";
import { authHeader } from "./auth-header.service";

@Injectable()

export class BrandService{
  constructor(private http: HttpClient, private _authHeader: authHeader) { }
   getAllBrand() {

    let httpOptions = {
      headers: this._authHeader.authheader('token')
    }
    return  this.http.get('https://tgi.final.kunapheap.com/brand', httpOptions)
  }
  findBrandById(id:any){
    let httpOptions = {
      headers: this._authHeader.authheader('token')
    }
    return this.http.get("https://tgi.final.kunapheap.com/brand/getById?id="+id,httpOptions)
  }
  editBrand(data:any,id:any){
    let httpOptions = {
      headers: this._authHeader.authheader('token')
    }
    return this.http.post("https://tgi.final.kunapheap.com/brand/update?id="+id,data,httpOptions)
  }
  createBrand(data: any) {
    let httpOptions = {
      headers: this._authHeader.authheader('token')
    }
    return this.http.post('https://tgi.final.kunapheap.com/brand', data,httpOptions)
  }

  deleteBrand(brand_id: string): Observable<any> {
    let httpOptions = {
      headers: this._authHeader.authheader('token')
    }
    return this.http.post('https://tgi.final.kunapheap.com/brand/delete?id=' + brand_id,"",httpOptions)
  }
}
