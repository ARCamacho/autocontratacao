import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { CustomerImg } from 'src/app/customer-img.service';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { environment } from '../../../environments/environment';
import { sendEvent } from './gtag';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent {

  public customerImg: CustomerImg = new CustomerImg();
  public customer: Customer = new Customer();
  public externalCode: string = "";
  public mostrar: string = "visible";
  public ver: number = 0;
  public banco_return: string = "";
  public msn_return: string = "";
  public bmg: string = "BMG"
  public master: string = "MASTER"
  public code: any = this.externalCode
  // Logos

  constructor(
    public customerService: CustomerService,
    public activatedRoute: ActivatedRoute,

  ) { }


linkar(){
  location.href = this.customer.digitalFormalizationLink
  console.log(this.customer.lenderName)
}

 veja(){
  this.ver = +1

 }



 SetBanco(): void {

  if (this.customer.lenderName == "") {
    this.customer.lenderName = "BMG"
    console.log(this.customer.lenderName)
  }


}


  ngOnInit(): void {
    console.log(this.customer.statusCode);
    const externalCode = this.activatedRoute.snapshot.paramMap.get("externalCode");




    this.SetBanco();
    console.log("https://qrcode-select-process-mode-jhn7pry2kq-uc.a.run.app/redirect/click_sms?url=https%3A%2F%2Ffna.to%2F")


// banco de mensagens
    if (externalCode === null) {
      this.externalCode = "";
    }
    else {
      this.externalCode = externalCode;
      this.getCustomer();

    }
  }



  getCustomer(): void {
    console.log(this.customer.statusCode);

    this.customerService.GetCustomer(this.externalCode).subscribe({
      next: (result) => {
        console.log(result)
        this.customer.name = result.name;
        this.customer.countryIdentity = result.countryIdentity;
        this.customer.withdrawalValue = result.withdrawalValue;
        this.customer.phone = result.phone;
        this.customer.messages = result.messages;
        this.customer.statusCode = result.statusCode;
        this.customer.statusName = result.statusName;
        this.customer.digitalFormalizationLink = result.digitalFormalizationLink;
        this.customer.lenderName = result.lenderName;


      },
      error: (error) => {
        console.error(error)

      }
    });
  }

  contratar = async (operationType: number) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${environment.apiFatban.url}/LandingPages/SelfHire`,
        headers: {
          'Content-Type': 'application/json',
          'ApiKey': environment.apiFatban.token
        },
        data: {
          operationType: operationType,
          externalCode: this.externalCode,

          productCode: environment.campaign.productCode,
          withdrawalValue: this.customer.withdrawalValue,
          novoLead: {
            name: this.customer.name,
            phone: this.customer.phone,
            countryIdentity: this.customer.countryIdentity,
            urlId: environment.campaign.urlId,

          }
        }

      }).then((response) =>{
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });

      console.log(response);

      if (operationType === 1) {
        sendEvent('button_contratar', { category: 'button', label: 'click' });
        location.href = "/validacao";
      } else if (operationType === 2) {
        sendEvent('button_falarCliente', { category: 'button', label: 'click' });
        location.href = "https://api.whatsapp.com/send?phone=5519996161968&text=Ol%C3%A1,%20recebi%20uma%20oferta%20de%20saque%20complementar%20em%20meu%20cart%C3%A3o%20BMG%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20a%20respeito";

      } else if (operationType === 3) {
        sendEvent('button_recusar', { category: 'button', label: 'click' });
        location.href = "/posatendimento";
        console.log(operationType)
      } else {
        location.href = "/errolead";
      }
    } catch (err) {
      console.log(err);
    }
  }
}
