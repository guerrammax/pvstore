import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class PersonasService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:5001/api/personas';
    
  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }


  getPersonas():Observable<any> {

    return this.httpClient.get(this.accessPointUrl, {headers: this.headers});

  }

  
  createPersona(persona:Persona): Observable<any>{

    let json =JSON.stringify(persona);
    return this.httpClient.post(this.accessPointUrl, json,{headers: this.headers});

  }


  getPersona(personaId:string): Observable<any>{
   
    return this.httpClient.get(this.accessPointUrl+'/'+personaId);
  }

  
  updatePersona(persona:Persona): Observable<any>{
    var id = persona.id;
    let json =JSON.stringify(persona);
    return this.httpClient.put(this.accessPointUrl+'/'+id , json, {headers: this.headers});
  }


  deletePersona(personaid:string): Observable<any>{

    return this.httpClient.delete(this.accessPointUrl+'/'+ personaid);
    // const params = new HttpParams().set

  }
}

export class Persona{
  id: number;
  nombre: string;
  fechaNacimiento:Date;

}
