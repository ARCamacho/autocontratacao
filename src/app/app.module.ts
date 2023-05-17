import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './componentes/start/start.component';
import { LoadComponent } from './componentes/load/load.component';
import { AssinaturaComponent } from './componentes/assinatura/assinatura.component';
import { TelaconfirmacaoComponent } from './componentes/telaconfirmacao/telaconfirmacao.component';
import { AtendimentoComponent } from './componentes/atendimento/atendimento.component';
import { PosatendimentoComponent } from './componentes/posatendimento/posatendimento.component';
import { RegisterleadComponent } from './componentes/registerlead/registerlead.component';
import { NotComponent } from './componentes/not/not.component';
import { NoteuComponent } from './componentes/noteu/noteu.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoadassComponent } from './componentes/loadass/loadass.component';
import { ErrorComponent } from './componentes/error/error.component';
import { StatuspropComponent } from './componentes/statusprop/statusprop.component';
import { AmbecwlcComponent } from './componentes/ambecwlc/ambecwlc.component';
import { InfobancComponent } from './componentes/infobanc/infobanc.component';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoadComponent,
    AssinaturaComponent,
    TelaconfirmacaoComponent,
    AtendimentoComponent,
    PosatendimentoComponent,
    RegisterleadComponent,
    NotComponent,
    NoteuComponent,
    HomeComponent,
    LoadassComponent,
    ErrorComponent,
    StatuspropComponent,
    AmbecwlcComponent,
    InfobancComponent,

  ],
  imports: [
    NgxCleaveDirectiveModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    AppRoutingModule,
    RecaptchaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
