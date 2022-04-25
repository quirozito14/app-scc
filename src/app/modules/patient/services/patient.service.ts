import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '@core/models/patient';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url:string = 'http://localhost:8080/api/patient';

  constructor(private http: HttpClient) { }


  getPatient(): Observable<Patient[]>{
    return this.http.get(this.url).pipe(
      map(response => response as Patient[])
    );
  }
}
