import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'app/service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  form!: FormGroup;
  constructor(private _categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      category: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.form.controls;
  }
  async submit() {
    let data = {
      category_name: this.form.value.category
    }
    await this._categoryService.createCategory(data).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/admin');
    })
  }

}
