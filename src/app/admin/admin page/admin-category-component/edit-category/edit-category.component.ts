import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'app/service/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  id!: string;
  form!: FormGroup;
  data!: any
  constructor(
    private _categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    await this._categoryService.findByCategoryId(this.id).subscribe((res) => {
      this.data = res
    })


    this.form = new FormGroup({
      category: new FormControl("", [Validators.required]),

    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
let data={
  category_name:this.form.value.category
}
    this._categoryService.editCategory(data,this.id).subscribe((res: any) => {
      this.router.navigateByUrl('/admin');
    })
  }

}
