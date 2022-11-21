import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productItem: any;
  id: any
  constructor( private route: ActivatedRoute,private product: ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.product.findProductById(this.id).subscribe((res)=>{
      this.productItem=res
    })
  }

}
