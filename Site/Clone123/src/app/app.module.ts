import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PremiumComponent } from './Premium/Premium.component';
import { SuporteComponent } from './suporte/suporte.component';
import { BaixarComponent } from './baixar/baixar.component';
import { InscreverComponent } from './inscrever/inscrever.component';


@NgModule({
  declarations: [									
    AppComponent,
      PrincipalComponent,
      NavComponent,
      FooterComponent,
      PremiumComponent,
      SuporteComponent,
      BaixarComponent,
      InscreverComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
