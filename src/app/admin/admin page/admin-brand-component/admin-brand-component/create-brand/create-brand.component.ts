import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubcategoryService } from 'app/service/subcategory.service';
import { BrandService } from '../../../../../service/brand.service';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {
  form!: FormGroup;
  constructor(private _subcategoryService: SubcategoryService, private router: Router, private _brand: BrandService) { }
  listSubCate: any = []
  ngOnInit() {
    this.form = new FormGroup({

      sub_category_id: new FormControl('', [Validators.required]),
      brand_name: new FormControl('', [Validators.required]),

    });

    this._subcategoryService.getAllSubcategory().subscribe((res) => {
      this.listSubCate = res
    })
  }
  get f() {
    return this.form.controls;
  }
  async submit() {


    await this._brand.createBrand(this.form.value).subscribe((res) => {
      this.router.navigateByUrl('/admin/brand');
    })
  }
}
