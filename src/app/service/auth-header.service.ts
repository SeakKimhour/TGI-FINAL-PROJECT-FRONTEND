import { LocalService } from "./local-storage.service";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class authHeader{
    constructor(private localStore: LocalService) {

    }
    authheader(key:string):HttpHeaders{
        let user = this.localStore.getData(key);
        if (user && user.token) {
          return new HttpHeaders({Authorization: 'Bearer ' + user.token , 'Content-Type' : 'application/json'}) ;
        } else {
          return  new HttpHeaders({'Content-Type' : 'application/json'}) ;
        }
    }
}
