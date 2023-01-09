import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




import { SigninModel } from '../../model/signin.model';
import { AuthService } from '../../service/auth.service';
import { LocalService } from '../../service/local-storage.service';
@Component({
  selector: 'app-sign_in',
  templateUrl: './sign_in.component.html',
  styleUrls: ['./sign_in.component.css']
})
export class Sign_inComponent implements OnInit {
  public loading = false;
  form: UntypedFormGroup

  constructor(private _router : Router, private _fb:FormBuilder, private _authService : AuthService,private localStore: LocalService) {
    this.form = _fb.group({

      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)



    })
  }

  ngOnInit() {
  }

  async onClickSubmit() {
    this.loading = true;
    await this._authService.signin(new SigninModel(this.form.value.username, this.form.value.password)).toPromise().then((res: any) => {
      this.localStore.saveData('token', res.token);
      this.localStore.saveData('user', res.roles[0]);
      this.localStore.saveData("username",res.username)
      this.loading = false;
      if(res.roles[0]==="ROLE_USER"){
        this._router.navigate(['/user'])

      }else if(res.roles[0]==="ROLE_ADMIN"){
        this._router.navigate(['/admin'])

      }

    })

  }

}
