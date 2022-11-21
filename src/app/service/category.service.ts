import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { authHeader } from './auth-header.service';
import { LocalService } from "./local-storage.service";
@Injectable()

export class CategoryService{
  constructor(private http : HttpClient, private httpHeader:authHeader ,private localStore: LocalService){}
  deleteCategory(id:string){
    let httpOptions = {
      headers :this.httpHeader.authheader('token')
    }
     return this.http.post('https://tgi.final.kunapheap.com/category/delete?id='+id,null,httpOptions)
  }
  getAllCategory(){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
     return this.http.get('https://tgi.final.kunapheap.com/category',httpOptions)
  }
  createCategory(data:any){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
    return this.http.post("https://tgi.final.kunapheap.com/category",data,httpOptions)
  }
  findByCategoryId(id:any){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
    return this.http.get("https://tgi.final.kunapheap.com/category/getById?id="+id,httpOptions)
  }
  editCategory(data:any,id:any){
    let httpOptions = {
      headers :this.httpHeader.authheader('token'),
      body:null,
      param : null,

    }
    return this.http.post("https://tgi.final.kunapheap.com/category/update?id="+id,data,httpOptions)
  }




}
