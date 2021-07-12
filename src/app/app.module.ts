import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KaeseKaufenComponent } from './kaese-kaufen/kaese-kaufen.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { KontoComponent } from './konto/konto.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoggedinComponent } from './loggedin/loggedin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    KaeseKaufenComponent,
    StartseiteComponent,
    KontoComponent,
    RegisterComponent,
    LoggedinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
