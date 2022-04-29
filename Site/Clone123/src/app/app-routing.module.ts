import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaixarComponent } from './baixar/baixar.component';
import { InscreverComponent } from './inscrever/inscrever.component';
import { PremiumComponent } from './Premium/Premium.component';
import { PrincipalComponent } from './principal/principal.component';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'home', component: PrincipalComponent},
  {path: 'premium', component: PremiumComponent},
  {path: 'suporte', component: SuporteComponent},
  {path:'baixar', component: BaixarComponent},
  {path:'inscrever', component: InscreverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
