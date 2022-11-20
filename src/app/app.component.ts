import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private local: LocalService,private _router : Router) {

  }
  
  title = 'angular-final-prject-tgi';
  ngOnInit() {
    if(this.local.getData("token").token===""){
      this._router.navigate(['/signin'])
    }
  }
}
