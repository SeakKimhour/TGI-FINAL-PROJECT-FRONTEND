import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { authHeader } from './auth-header.service';
@Injectable()

export class CategoryService{
  constructor(private http : HttpClient, private httpHeader:authHeader ){}
  getAllCategory(){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
     return this.http.get('https://tgi.final.kunapheap.com/category',httpOptions)
  }
  deleteCategory(id:any){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
    console.log(httpOptions);

     return this.http.post('https://tgi.final.kunapheap.com/category/delete?id='+id,httpOptions)
  }

}
