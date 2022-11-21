import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubcategoryService } from 'app/service/subcategory.service';

@Component({
  selector: 'app-admin-sub-category-component',
  templateUrl: './admin-sub-category-component.component.html',
  styleUrls: ['./admin-sub-category-component.component.css']
})
export class AdminSubCategoryComponentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _subcategoryService: SubcategoryService, private router: Router) { }

  listSubCategory: any = []
  async ngOnInit(): Promise<void> {
    await this._subcategoryService.getAllSubcategory().subscribe((res) => {
      this.listSubCategory = res
    })
  }
  async deletePost(data: any) {
    await this._subcategoryService.deleteSubcategory(data).subscribe((res) => {
      window.location.reload()
      console.log(res);

    })
  }

  onClickEdit(id: any) {
    this.router.navigate(["/admin/sub-category/" + id],{relativeTo:this.route})
  }




}
