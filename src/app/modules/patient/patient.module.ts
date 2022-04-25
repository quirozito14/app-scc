import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientPageComponent } from './pages/patient-page/patient-page.component';
import { NewPatientPageComponent } from './pages/new-patient-page/new-patient-page.component';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [
    PatientPageComponent,
    NewPatientPageComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})

export class PatientModule { }
