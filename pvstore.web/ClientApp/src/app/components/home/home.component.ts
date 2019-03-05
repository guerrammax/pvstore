import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/personas/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas : IPersona[];
 

  constructor( private personasService: PersonasService) { }

  ngOnInit() {
    this.cargarData();
  }


  delete(persona:IPersona){
    this.personasService.deletePersona(persona.id.toString())
    .subscribe(persona=>this.cargarData(),
    error=>console.log(error));
  }

  cargarData(){
    this.personasService.getPersonas()
    .subscribe(personasDW =>this.personas = personasDW,
      error=>console.error(error));
  }

}

export interface IPersona{
  id: number,
  nombre: string,
  fechaNacimiento: Date;
}
