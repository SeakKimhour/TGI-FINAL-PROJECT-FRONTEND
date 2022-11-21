import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BrandModel } from "app/model/brand.model";
import { Observable } from "rxjs";
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
        console.log(r);

      })
    })
    console.log(this.brands);
    return this.brands
  }

  postData(data: any): Observable<any> {
    return this.http.post('https://tgi.final.kunapheap.com/brand', data)
  }

  deleteData(brand_id: string): Observable<any> {
    return this.http.delete('https://tgi.final.kunapheap.com/brand/' + brand_id)
  }
}
