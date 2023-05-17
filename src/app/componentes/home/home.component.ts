import { Component } from '@angular/core';
import { CustomerImg } from 'src/app/customer-img.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public customerImg: CustomerImg = new CustomerImg();

}
