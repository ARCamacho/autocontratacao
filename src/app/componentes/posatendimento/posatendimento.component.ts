import { Component } from '@angular/core';
import { CustomerImg } from 'src/app/customer-img.service';

@Component({
  selector: 'app-posatendimento',
  templateUrl: './posatendimento.component.html',
  styleUrls: ['./posatendimento.component.css']
})
export class PosatendimentoComponent {
  public customerImg: CustomerImg = new CustomerImg();
}
