import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PersonasFormComponent } from './personas/personas-form/personas-form.component';
// import { SearchComponent } from "./components/search/search.component";
// import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'persona-agregar', component:PersonasFormComponent},
    {path: 'persona-editar/:id', component:PersonasFormComponent},
     
    {path:'', pathMatch: 'full', redirectTo:'home'},

    {path:'**', pathMatch:'full', redirectTo:'home'}
];