import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaeseKaufenComponent } from './kaese-kaufen/kaese-kaufen.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { KontoComponent } from './konto/konto.component';
import { RegisterComponent } from './register/register.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [

  {path: 'app-kaese-kaufen' , component: KaeseKaufenComponent},
  {path: 'app-konto'        , component: KontoComponent},
  {path: 'app-loggedin'      , component: LoggedinComponent},
  {path: 'app-startseite'   , component: StartseiteComponent},
  {path: 'app-register'     , component: RegisterComponent}  


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
