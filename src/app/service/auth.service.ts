import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router, TitleStrategy } from "@angular/router";
import { SigninModel } from "../model/signin.model";
import { authHeader } from './auth-header.service';

import { SignupModel } from '../model/signup.model';

@Injectable()

export class AuthService{

  constructor(private http : HttpClient, private _router : Router, private httpHeader:authHeader ){}


  signin(signinModel : SigninModel){
    let httpOptions = {


      headers :this.httpHeader.authheader(''),
      body : null,
      param : null,

    }

    return this.http.post('https://tgi.final.kunapheap.com/api/auth/signin',{username: signinModel.username, password : signinModel.password},httpOptions)
  }
  signup(signupModel:SignupModel){
    let httpOptions = {
      headers :this.httpHeader.authheader(''),
      body:null,
      param : null,

    }
    return this.http.post('https://tgi.final.kunapheap.com/api/auth/signup',{username: signupModel.username,email:signupModel.email, password : signupModel.password},httpOptions)
  }
}
