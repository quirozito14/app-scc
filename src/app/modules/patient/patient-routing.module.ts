
import { PatientPageComponent } from './pages/patient-page/patient-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    component: PatientPageComponent,
    outlet: 'child',
    children: [
      {
        path:'new',
        loadChildren: () => import('@modules/patient/new-patient/new-patient.module').then(m => m.NewPatientModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
