import { Component } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { Customer } from 'src/app/customer';
import { CustomerImg } from 'src/app/customer-img.service';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.css']
})
export class AssinaturaComponent {
  public customerImg: CustomerImg = new CustomerImg();
  public customer: Customer= new Customer();
  public start: any = StartComponent;

  
  

  
  

  
  

  returnToHome = () => {
    console.log(this.start.code)
    return  window.location.href="#"
  }
}
