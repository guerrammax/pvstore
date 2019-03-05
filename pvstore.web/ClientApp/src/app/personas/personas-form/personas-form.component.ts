import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonasService } from '../personas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  personaId: number;

  constructor(private fb: FormBuilder,
    private personaService: PersonasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.formGroup = this.fb.group({
      nombre: '',
      fechaNacimiento: ''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }
      this.modoEdicion = true;
      this.personaId = params["id"];

      this.personaService.getPersona(this.personaId.toString())
        .subscribe(persona => this.cargarFormulario(persona),
          error => console.error(error));
    });
  }

  cargarFormulario(persona: IPersona) {

    var dp = new DatePipe(navigator.language);
    var format = "yyyy-MM-dd";

    this.formGroup.patchValue({
      nombre: persona.nombre,
      fechaNacimiento: dp.transform(persona.fechaNacimiento, format)
    });
  }

  save() {

    let persona: IPersona = Object.assign({}, this.formGroup.value);
    console.table(persona);

    if (this.modoEdicion) {

      persona.id = this.personaId;
      this.personaService.updatePersona(persona)
        .subscribe(persona => this.onSaveSuccess()),
        error => console.error(error);


    } else {

      this.personaService.createPersona(persona)
        .subscribe(persona => this.onSaveSuccess(),
          error => console.error(error));

    }

  }

  

  onSaveSuccess() {
    this.router.navigate(["/personas"]);
  }
}


export interface IPersona {
   id: number,
  nombre: string,
  fechaNacimiento: Date;
}