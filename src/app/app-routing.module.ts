import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaeseKaufenComponent } from './kaese-kaufen/kaese-kaufen.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KontoComponent } from './konto/konto.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [

  {path: 'app-kaese-kaufen' , component: KaeseKaufenComponent},
  {path: 'app-konto'        , component: KontoComponent},
  {path: 'app-kontakt'      , component: KontaktComponent},
  {path: 'app-startseite'   , component: StartseiteComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
