import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { ToastrService } from 'ngx-toastr';

import { SigninModel } from '../model/signin.model';
import { AuthService } from '../service/auth.service';
import { LocalService } from '../service/local-storage.service';
@Component({
  selector: 'app-sign_in',
  templateUrl: './sign_in.component.html',
  styleUrls: ['./sign_in.component.css']
})
export class Sign_inComponent implements OnInit {
  public loading = false;
  form: UntypedFormGroup

  constructor(private _router : Router, private _fb:FormBuilder, private _authService : AuthService,private localStore: LocalService, private _toastr : ToastrService) {
    this.form = _fb.group({

      username : new FormControl('kimhour', Validators.required),
      password : new FormControl('123213', Validators.required)



    })
  }

  ngOnInit() {
  }

  async onClickSubmit() {
    this.loading = true;
    await this._authService.signin(new SigninModel(this.form.value.username, this.form.value.password)).toPromise().then((res: any) => {
      this.localStore.saveData('token', res.token);
      this.loading = false;
      this._router.navigate(['/home',{skipLocationChange:false}]).then(()=>{
        this._router.navigate(['/refreshNav']).then(()=>{
          this._router.navigate(['/home'])
        })
      })
      this.localStore.saveData('user', res.roles[0]);
      this.loading = false;
      this._router.navigate(['/home'])


      this._toastr.success('Login Successfully','')
    })

  }

}
