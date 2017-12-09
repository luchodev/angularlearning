import { Component } from "@angular/core";
import { ProductService } from '../products/product.service';

@Component({
  selector: 'pm-test',
  template: `<div> This is the test componet (services, provider, variables persistance between components) </div>
  <br> <button (click)='setVariable();'> Set variable </button>`
})
export class TestComponent {
  constructor( private _productService: ProductService ){}

  setVariable(): void {
    console.log(`Called from test component, value before set = ${this._productService.getShareVariable()}`)
    this._productService.setShareVariable('Set from test Component!');
  }
}