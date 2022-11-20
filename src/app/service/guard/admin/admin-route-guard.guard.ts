import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalService } from 'app/service/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuardGuard implements CanActivate {
  constructor(private _LocalService:LocalService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   if (  this._LocalService.getData("user").token==="ROLE_ADMIN"){
    return true
   }else{
    return false;
   }

  }
}
