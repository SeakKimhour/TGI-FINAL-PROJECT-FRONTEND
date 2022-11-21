import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { authHeader } from "./auth-header.service";

@Injectable()

export class SubcategoryService {
  constructor(private http: HttpClient, private httpHeader: authHeader) { }

  getAllSubcategory() {
    let httpOptions = {
      headers: this.httpHeader.authheader('token'),
      body: null,
      param: null,

    }
    return this.http.get('https://tgi.final.kunapheap.com/subcategory', httpOptions)
  }
  editSubCategoty(data: any, id: any) {
    let httpOptions = {
      headers: this.httpHeader.authheader('token'),
      body: null,
      param: null,

    }
    return this.http.post('https://tgi.final.kunapheap.com/subcategory/update?id=' + id, data, httpOptions)
  }
  findSubCatorById(id: any) {
    let httpOptions = {
      headers: this.httpHeader.authheader('token'),
      body: null,
      param: null,

    }

    return this.http.get("https://tgi.final.kunapheap.com/subcategory/getById?id=" + id, httpOptions)
  }
  createSubCategory(data: any) {
    let httpOptions = {
      headers: this.httpHeader.authheader('token'),
      body: null,
      param: null,

    }
    return this.http.post('https://tgi.final.kunapheap.com/subcategory', data, httpOptions)
  }
  deleteSubcategory(id: any) {
    let httpOptions = {
      headers: this.httpHeader.authheader('token'),
      body: null,
      param: null,

    }
    return this.http.post('https://tgi.final.kunapheap.com/subcategory/delete?id=' + id, "", httpOptions)
  }
}
