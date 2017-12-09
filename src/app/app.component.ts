import { Component } from '@angular/core'
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `<div class="container"> <h1> {{pageTitle}} </h1>
              <pm-products></pm-products>
              <br>
              <pm-test></pm-test>
            </div>`,
  providers: [ ProductService ]
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
