import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'app/service/brand.service';
import { CategoryService } from 'app/service/category.service';

@Component({
  selector: 'app-admin-brand-component',
  templateUrl: './admin-brand-component.component.html',
  styleUrls: ['./admin-brand-component.component.css']
})
export class AdminBrandComponentComponent implements OnInit {

  constructor(private _brandService: BrandService,    private router: Router) { }

  listBrand: any = []
  async ngOnInit(): Promise<void> {
    await this._brandService.getAllBrand().subscribe((res) => {
      this.listBrand = res
    })
  }
  async deletePost(data: string) {
    await this._brandService.deleteBrand(data).subscribe((res)=>{
     window.location.reload()
    })
  }
  onClickEdit(id:any){
    this.router.navigate(["/admin/brand/edit/"+id])
  }

}
