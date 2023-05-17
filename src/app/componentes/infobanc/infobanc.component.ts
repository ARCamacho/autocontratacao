import { query } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { CustomerImg } from 'src/app/customer-img.service';


@Component({
  selector: 'app-infobanc',
  templateUrl: './infobanc.component.html',
  styleUrls: ['./infobanc.component.css']
})
export class InfobancComponent {

  public customerImg: CustomerImg = new CustomerImg();
  constructor(private elementRef: ElementRef) {}


  uf = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais','Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal' ]


  banks = [{codigobank: 121, bank_name: 'Agibank'},{codigobank: '237', bank_name: 'Banco Bradesco'},{codigobank: '213', bank_name: 'Arbi'},
  {codigobank: '025', bank_name: 'Banco Alfa'},{codigobank: '268', bank_name: 'Banco Bari'},{codigobank: '003', bank_name: 'Banco da Amazonia'},
  {codigobank: '001', bank_name: 'Banco do Brasil'},{codigobank: '47', bank_name: 'Banco do Estado de Sergipe'},{codigobank: '004', bank_name: 'Banco do Nordeste '},
  {codigobank: '012', bank_name: 'Banco Inbursa'},{codigobank: '604', bank_name: 'Banco Industrial do Brasil'},{codigobank: '243', bank_name: 'Banco Master'},
  {codigobank: '169', bank_name: 'Banco Olé Bonsucesso Consignado '},{codigobank: '756', bank_name: 'Bancoob'},{codigobank: '021', bank_name: 'Banestes'},
  {codigobank: '250', bank_name: 'BCV '},{codigobank: '318', bank_name: 'BMG'},{codigobank: '063', bank_name: 'Bradescard '},
  {codigobank: '036', bank_name: 'Bradesco '},{codigobank: '394', bank_name: 'Bradesco Financiamentos'},{codigobank: '292', bank_name: 'BS2'},
  {codigobank: '336', bank_name: 'C6 Bank '},{codigobank: '104', bank_name: 'Caixa Economica Federal'},{codigobank: '739', bank_name: 'Cetelem'},
  {codigobank: '233', bank_name: 'Cifra '},{codigobank: '745', bank_name: 'Citibank'},{codigobank: '069', bank_name: 'Crefisa'},
  {codigobank: '707', bank_name: 'Daycoval'},{codigobank: '654', bank_name: 'Digimais'},{codigobank: '149', bank_name: 'Facta'},
  {codigobank: '626', bank_name: 'Fisca'},{codigobank: '029', bank_name: 'Itau Consignado '},{codigobank: '341', bank_name: 'Itau Unibanco'},
  {codigobank: '399', bank_name: 'Kirton'},{codigobank: '389', bank_name: 'Mercantil'},{codigobank: '290', bank_name: 'PagBank'},
  {codigobank: '422', bank_name: 'Safra'},{codigobank: '033', bank_name: 'Santander'},{codigobank: '743', bank_name: 'Semear'},
  {codigobank: '748', bank_name: 'Sicredi'},{codigobank: '655', bank_name: 'VotorantiM'}
]


TypeCode =[{code: 1, type: 'Conta Corrente'},{code: 1, type: 'Poupança'}, ]
}






