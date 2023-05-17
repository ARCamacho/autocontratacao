import { Customer } from 'src/app/customer';


export class CustomerImg {
  public customer: Customer = new Customer();
  public lgBmg: string;
  public lgBmgGreen: string
  public lgMaster: string;
  public lgFinanto: string;
  public lgFinantoGreen2: string;
  public bgk: string;
  public msgpendencias: any;
  public msganalise: any;
  public msgpaga: any;
  public msgdigi: any;
  public bkgclaroxd: string;
  public bkgvocasal: string
  public logobmgori: string
  public logoorginal2: string
  public wpp: string
  public wppok: string
  public mais: string

  constructor() {
      this.lgBmg = "https://storage.googleapis.com/gawen_storage/bancoslogos/bmgwhite.png";
      this.logobmgori = "https://storage.googleapis.com/gawen_storage/globalimages/banco-bmg-logo-8.png"
      this.wpp = "https://storage.googleapis.com/gawen_storage/wppicon.png"
      this.wppok = "https://storage.googleapis.com/gawen_storage/wppiconok.png"
      this.mais = "https://storage.googleapis.com/gawen_storage/mais.png"
      this.logoorginal2 = "https://storage.googleapis.com/gawen_storage/globalimages/logoor.png"
      this.lgBmgGreen = "https://storage.googleapis.com/gawen_storage/globalimages/bmggreen.png"
      this.lgMaster = "https://storage.googleapis.com/gawen_storage/bancoslogos/masterwhite.png";
      this.lgFinanto = "https://storage.googleapis.com/gawen_storage/globalimages/logoRWhite.png";
      this.lgFinantoGreen2 = "https://storage.googleapis.com/gawen_storage/globalimages/logoRGreen2.png"
      this.bgk = "https://storage.googleapis.com/gawen_storage/lpbdr/img/bkgvoviz.png";
      this.bkgclaroxd = "https://storage.googleapis.com/gawen_storage/globalimages/bkgclaroxd.png"
      this.bkgvocasal = "https://storage.googleapis.com/gawen_storage/globalimages/vodocasal.png"
      this.msgpendencias = this.customer.name +  ", Sua proposta está pendente. Por favor, entre em contato com o nosso Serviço de Atendimento ao Cliente (SAC). "
      this.msganalise = this.customer.name + ", Sua proposta está em análise. "
      this.msgpaga = this.customer.name + ", O valor da sua proposta foi liberado! "
      this.msgdigi = this.customer.name + ", Sua proposta está em digitação automática. "
      console.log(this.lgBmg)
  }
}



