import { Component } from '@angular/core';
import { CustomerImg } from 'src/app/customer-img.service';
@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent {
  public customerImg: CustomerImg = new CustomerImg();

}
