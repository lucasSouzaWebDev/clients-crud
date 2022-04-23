import { Injectable } from '@angular/core';
import { Customer } from './../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customers: Customer[] = [];
  constructor() {
  }

  public getCustomers(): Customer[] {
    this.updateCustomersList();
    return this._customers;
  }

  private updateCustomersList(): void {
    this._customers = JSON.parse(sessionStorage.getItem('customers')) ?? []
    if (!this._customers) {
      return;
    }
  }

  public getCustomer(id: number): Customer {
    console.log(id);
    
    let customer = this._customers.find((customer) => customer.id == id)
    if (customer) {
      return customer
    }
    
    return new Customer;
  }

  public saveCustomer(customer: Customer): void {
    if (!customer.id) {
      customer.id = this._customers.length + 1;
      this._customers.push(customer);
    }

    sessionStorage.setItem('customers', JSON.stringify(this._customers))
  }

  public deleteCustomer(id) {
    let index = this._customers.findIndex((customer) => customer.id == id)
    
    this._customers.splice(index, 1);
    sessionStorage.setItem('customers', JSON.stringify(this._customers))
  }
}
