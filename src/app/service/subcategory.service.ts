import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { authHeader } from "./auth-header.service";

@Injectable()

export class SubcategoryService{
  constructor(private http: HttpClient, private httpHeader:authHeader) { }

  getAllSubcategory(){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
     return this.http.get('https://tgi.final.kunapheap.com/subcategory',httpOptions)
  }
  deleteCategory(id:any){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
    console.log(httpOptions);

     return this.http.post('https://tgi.final.kunapheap.com/subcategory/delete?id='+id,httpOptions)
  }
}
