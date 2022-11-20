import { Component, OnInit } from '@angular/core';
import { BrandService } from 'app/service/brand.service';

@Component({
  selector: 'app-admin-brand-component',
  templateUrl: './admin-brand-component.component.html',
  styleUrls: ['./admin-brand-component.component.css']
})
export class AdminBrandComponentComponent implements OnInit {

  listBrand : any = []

  constructor(private _brandService : BrandService) { }

  async ngOnInit(){
    this.listBrand = await this._brandService.getAllBrand()
    console.log(this.listBrand);

  }

}
