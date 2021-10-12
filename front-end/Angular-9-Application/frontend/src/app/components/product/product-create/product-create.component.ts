import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0
  }
  validProd: boolean = true;
  msgProductInvalid: string ='';
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
   
  }
  createProduct(): void{
    this.validProd = true;
    this.msgProductInvalid ='';
    if(!this.productService.validateProductName(this.product.name)){
      this.msgProductInvalid += 'Nome do produto não pode estar vazio! ';
      this.validProd = false;
    }
    if(!this.productService.validateProductPrice(this.product.price))
    {
      this.msgProductInvalid += 'Preço do produto não pode estar zerado ou negativo!\n';
      this.validProd = false;
    }
    if(this.validProd){
      this.productService.create(this.product).subscribe(() =>{
        this.productService.showMsg('Produto criado com sucesso!');
        this.router.navigate(['/products']);
      });
    }
    else{
      this.productService.showMsg(this.msgProductInvalid);
    }
    
  }
  cancel(): void{
    this.router.navigate(['/products']);
  }
}
