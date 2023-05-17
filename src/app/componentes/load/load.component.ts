import { Component } from '@angular/core';
import { CustomerImg } from 'src/app/customer-img.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})

export class LoadComponent {
  public customerImg: CustomerImg = new CustomerImg();
  
}
