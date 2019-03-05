import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

//Idioma para las fechas en español
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

//rutas
import { ROUTES } from './app.routes';
import { PersonasService } from './personas/personas.service';
import { PersonasFormComponent } from './personas/personas-form/personas-form.component';

//Idioma para las fechas en español
registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    NavbarComponent,
    HomeComponent,
    PersonasFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [
    PersonasService,
    
    //Idioma para las fechas en español
    { provide: LOCALE_ID, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
