import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalService } from 'app/service/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardGuard implements CanActivate {
  constructor(private local: LocalService,private _router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(this.local.getData("token").token!==""){
        return true
      }else{
        
        this._router.navigate(['/signin'])
        return false
      }
  }
  
}
