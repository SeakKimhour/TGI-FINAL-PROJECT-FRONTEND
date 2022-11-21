import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'app/service/brand.service';
import { SubcategoryService } from 'app/service/subcategory.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  form!: FormGroup;
  constructor(private router: Router, private _brand: BrandService, private route: ActivatedRoute,) { }

  id!: string;
  data!: any
  ngOnInit() {
    this.form = new FormGroup({
      brand_name: new FormControl('', [Validators.required]),
    });
    this.id = this.route.snapshot.params['id'];
  }
  get f() {
    return this.form.controls;
  }
  async submit() {


    await this._brand.editBrand(this.form.value, this.id).subscribe((res) => {
      this.router.navigateByUrl('/admin/brand');
    })
  }

}
