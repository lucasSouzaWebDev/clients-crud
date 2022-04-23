import { Component, OnInit } from '@angular/core';
import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  customers: Customer[] = [];
  isEmpty: boolean;
  constructor(private _customerService : CustomerService, private _router:Router) { }

  ngOnInit(): void {
    this.customers = this._customerService.getCustomers();
    
    this.isEmpty = this.customers.length == 0;
  }

  public add(): void{
    this._router.navigate(['/create']);
  }

  public edit(id): void{
    this._router.navigate(['/edit', id]);
  }

  public delete(id): void{
    this._customerService.deleteCustomer(id)
    this.customers = this._customerService.getCustomers();
    this.isEmpty = this.customers.length == 0;
  }

}
