import { NoteuComponent } from './componentes/noteu/noteu.component';
import { NotComponent } from './componentes/not/not.component';
import { RegisterleadComponent } from './componentes/registerlead/registerlead.component';
import { PosatendimentoComponent } from './componentes/posatendimento/posatendimento.component';
import { AtendimentoComponent } from './componentes/atendimento/atendimento.component';
import { TelaconfirmacaoComponent } from './componentes/telaconfirmacao/telaconfirmacao.component';
import { AssinaturaComponent } from './componentes/assinatura/assinatura.component';

import { AmbecComponent } from './componentes/ambec/ambec.component';
import { LoadComponent } from './componentes/load/load.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './componentes/start/start.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { StatuspropComponent } from './componentes/statusprop/statusprop.component';
import { AmbecwlcComponent } from './componentes/ambecwlc/ambecwlc.component';
import { InfobancComponent } from './componentes/infobanc/infobanc.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'start',
    component:StartComponent,
  },
  {
    path:'ambec',
    component: AmbecComponent
  },
  {
    path:'bemvindoambec',
    component: AmbecwlcComponent
  },
  {
    path:'load',
    component: LoadComponent
  },
  {
    path:'validacao',
    component: AssinaturaComponent
  },
  {
    path:'confirmacao',
    component: TelaconfirmacaoComponent
  },
  {
    path:'callcliente',
    component: AtendimentoComponent
  },
  {
    path:'posatendimento',
    component: PosatendimentoComponent
  },
  {
    path: 'leadregister',
    component: RegisterleadComponent
  },
  {
    path: 'errolead',
    component: ErrorComponent
  },
  {
    path: 'naoatende',
    component: NotComponent
  },
  {
    path: 'status',
    component: StatuspropComponent
  },
  {
    path: 'naosoueu',
    component: NoteuComponent
  },
  {
    path: 'infobanc',
    component: InfobancComponent

  },
  {
    path:':externalCode',
    component:StartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
