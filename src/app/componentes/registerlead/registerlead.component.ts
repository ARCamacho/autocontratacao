import { Component } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-registerlead',
  templateUrl: './registerlead.component.html',
  styleUrls: ['./registerlead.component.css']
})



export class RegisterleadComponent {
  oi:boolean = false
  cpf:string = ""
  nome: string = ""
  phone: string = ""
  page = 1;
  data = {}
  captcha: boolean = false

  Count_page = () => {
		if(this.page == 1 ){
			this.page += 1
		}else if (this.page == 2 ){
			this.page += 1
		}else if(this.page == 3){
			this.page += 1
      this.oi = true
      this.captcha = true
      console.log(this.captcha)
		}
	}
  enviar = () => {
    this.data = {
      "cpf": this.cpf,
      "nome": this.nome,
      "phone": this.phone
    }
    axios({
        method: 'POST',
        url: '',
        data: this.data
    }).then((scc) => {console.log(scc)})
    .catch((err) => console.log(err))
  }
}






