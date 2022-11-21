import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'app/service/category.service';
import { SubcategoryService } from 'app/service/subcategory.service';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {
  form!: FormGroup;
  constructor(private _categoryService: CategoryService,private _subcategoryService:SubcategoryService, private router: Router) { }
  listcate :any= []
  ngOnInit() {
    this.form = new FormGroup({
      category_id: new FormControl('', [Validators.required]),
      sub_category_name: new FormControl('', [Validators.required]),

    });

  this._categoryService.getAllCategory().subscribe((res)=>{
    this.listcate =res
  })
  }
  get f() {
    return this.form.controls;
  }
  async submit() {
    await this._subcategoryService.createSubCategory(this.form.value).subscribe((res) => {
      this.router.navigateByUrl('/admin/sub-category');
    })
  }
}
