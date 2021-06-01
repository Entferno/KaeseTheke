import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaeseKaufenComponent } from './kaese-kaufen/kaese-kaufen.component';

const routes: Routes = [

  {path: 'app-kaese-kaufen' , component: KaeseKaufenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
