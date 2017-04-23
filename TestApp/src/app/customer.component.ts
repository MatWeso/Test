import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  providers: [CustomerService]
})
export class CustomerComponent {
    firstName : string;
    lastName : string;
    address : string;

    constructor (customerService : CustomerService){
      this.firstName = customerService.getFirstName();
      this.address = customerService.getAdress();
      this.lastName = customerService.getLastName();
    }
}
