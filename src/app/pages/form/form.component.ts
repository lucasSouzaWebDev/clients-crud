import { Component, OnInit } from '@angular/core';
import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  id: number;
  customer: Customer;
  states: Object;

  constructor(private _customerService: CustomerService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.customer = this._customerService.getCustomer(this.id);
    
    if(!this.customer.typePerson){
      this.customer.typePerson = 'phisical';
    }
    this.setStates();
  }

  onSubmit(): void {
    this._customerService.saveCustomer(this.customer);
    this._router.navigate(['/list']);
  }

  public setStates(): void {
    this.states = Object.entries({
      'AC': 'Acre',
      'AL': 'Alagoas',
      'AP': 'Amapá',
      'AM': 'Amazonas',
      'BA': 'Bahia',
      'CE': 'Ceará',
      'DF': 'Distrito Federal',
      'ES': 'Espírito Santo',
      'GO': 'Goías',
      'MA': 'Maranhão',
      'MT': 'Mato Grosso',
      'MS': 'Mato Grosso do Sul',
      'MG': 'Minas Gerais',
      'PA': 'Pará',
      'PB': 'Paraíba',
      'PR': 'Paraná',
      'PE': 'Pernambuco',
      'PI': 'Piauí',
      'RJ': 'Rio de Janeiro',
      'RN': 'Rio Grande do Norte',
      'RS': 'Rio Grande do Sul',
      'RO': 'Rondônia',
      'RR': 'Roraíma',
      'SC': 'Santa Catarina',
      'SP': 'São Paulo',
      'SE': 'Sergipe',
      'TO': 'Tocantins'
    })
  }
}
