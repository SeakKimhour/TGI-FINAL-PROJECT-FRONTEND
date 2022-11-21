import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'app/service/category.service';
import { SubcategoryService } from 'app/service/subcategory.service';

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html',
  styleUrls: ['./edit-sub-category.component.css']
})
export class EditSubCategoryComponent implements OnInit {



  form!: FormGroup;
  constructor(      private route: ActivatedRoute, private router: Router,private _subcategoryService: SubcategoryService) { }
  listcate: any = []
  id!: string;
  data!: any
  async ngOnInit() {
    this.form = new FormGroup({

      sub_category_name: new FormControl('', [Validators.required]),
    });
    this.id = this.route.snapshot.params['id'];
    await this._subcategoryService.findSubCatorById(this.id).subscribe((res) => {
      this.data = res
    })
  }
  get f() {
    return this.form.controls;
  }
  async submit() {
    await this._subcategoryService.editSubCategoty(this.form.value,this.data.sub_category_id).subscribe((res) => {
      this.router.navigateByUrl('/admin/sub-category');
    })

  }


}
