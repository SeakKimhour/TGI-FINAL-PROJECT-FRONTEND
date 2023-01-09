import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupModel } from 'app/model/signup.model';
import { AuthService } from 'app/service/auth.service';
import { LocalService } from 'app/service/local-storage.service';

@Component({
  selector: 'app-sign_up',
  templateUrl: './sign_up.component.html',
  styleUrls: ['./sign_up.component.css']
})
export class Sign_upComponent implements OnInit {
  public loading = false;
  form: FormGroup;
  constructor(private _router: Router, private _fb: FormBuilder, private _authService: AuthService, private localStore: LocalService) {

    this.form = _fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }



  onClickSubmit() {

    this._authService.signup(new SignupModel(this.form.value.username, this.form.value.email, this.form.value.password)).toPromise().then(async (res: any) => {
      this.loading = false;
      this.localStore.saveData('token', res.token);
      this.localStore.saveData('user', res.roles[0]);
      this.localStore.saveData("username",res.username)
      if (res.roles[0] === "ROLE_USER") {
        this._router.navigate(['/user'])

      } else if (res.roles[0] === "ROLE_ADMIN") {
        this._router.navigate(['/admin'])

      }
    })

  }
}

