import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'app/service/brand.service';
import { ProductService } from 'app/service/product.service';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  listBrands : any = []

  async ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true
    }),
    this.listBrands = await this._brandService.getAllBrand()
    console.log(this.listBrands)
  }
  form : UntypedFormGroup

  name = 'Angular';
  private stepper!: Stepper;

  constructor(private _router: Router, _fb:FormBuilder, private _productService: ProductService
    , private _brandService: BrandService) {
    this.form = _fb.group({
      category : new FormControl('', Validators.required),
      title : new FormControl('', Validators.required),
      brand : new FormControl('', Validators.required),
      model : new FormControl('', Validators.required),
      storage : new FormControl('', Validators.required),
      price : new FormControl('', Validators.required),
      condition : new FormControl('', Validators.required),
      contact_number : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      photo : new FormControl('', Validators.required),
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })
  }

  onNext() {
    this.stepper.next();
    return false
  }



  async onSubmit() {
    let addProduct = {
      product_name: this.form.value.title,
      product_brand_id: this.form.value.brand,
      product_storage: this.form.value.storage,
      product_price: this.form.value.price,
      product_condition: this.form.value.condition,
      contact_number: this.form.value.contact_number.toString(),
      product_description: this.form.value.description,
      image_url: this.form.value.photo
    }
    try {
      this._productService.createProduct(addProduct);

      this._router.navigate(['/user/home'])
    } catch (error) {
    }

  }

  onBackHome() {
  }


}
