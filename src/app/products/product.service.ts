import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map';

import { IProduct } from "./product";

@Injectable()
export class ProductService {
  private _productUrl = './api/products/products.json'
  private shareVariable: string = 'With default value'

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .do(data => console.log(`All: ${JSON.stringify(data)}`))
      .catch(this.handleError)
  }

  getProductById(id: number): Observable<IProduct> {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.productId == id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(`Error ${err.message}`);
    return Observable.throw(err.message);
  }

  getShareVariable(): string {
    return this.shareVariable;
  }

  setShareVariable(value: string): void {
    this.shareVariable = value;
  }
}
