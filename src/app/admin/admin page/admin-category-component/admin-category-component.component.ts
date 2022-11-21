import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'app/service/category.service';

@Component({
  selector: 'app-admin-category-component',
  templateUrl: './admin-category-component.component.html',
  styleUrls: ['./admin-category-component.component.css']
})
export class AdminCategoryComponentComponent implements OnInit {
  constructor(    private route: ActivatedRoute,private _categoryService: CategoryService,    private router: Router) { }

  listCategory: any = []
  async ngOnInit(): Promise<void> {
    await this._categoryService.getAllCategory().subscribe((res) => {
      this.listCategory = res
    })
  }
  async deletePost(data: any) {
    await this._categoryService.deleteCategory(data).subscribe((res)=>{
     window.location.reload()
    })
  }
  onClickEdit(id:any){
    this.router.navigate(['/admin/category',id], { relativeTo: this.route });
  }

}
