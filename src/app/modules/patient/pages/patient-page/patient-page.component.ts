import { Component, OnInit } from '@angular/core';
import { Patient } from '@core/models/patient';
import { PatientService } from '@modules/patient/services/patient.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {

  patient : Patient[];

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.service.getPatient().subscribe(
      patient => this.patient = patient
    );
  }

}
