import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'app/service/local-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin = false
  constructor(private _router: Router, private local: LocalService) { }


  ngOnInit() {

    if (this.local.getUserRole("user").role === "ROLE_ADMIN") {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }

  }
  onSignOut() {
    this.local.clearData()
    window.location.reload()
  }
  onClickSignin() {
    this._router.navigate(['/signin'])
  }

  onClickFavorite() {
    this._router.navigate(['user/profile'])
  }


}
