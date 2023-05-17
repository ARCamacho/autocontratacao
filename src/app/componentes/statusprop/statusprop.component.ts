import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
@Component({
  selector: 'app-statusprop',
  templateUrl: './statusprop.component.html',
  styleUrls: ['./statusprop.component.css']
})
export class StatuspropComponent {
  public customer: Customer = new Customer();

}
