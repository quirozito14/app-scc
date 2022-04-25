import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPatientPageComponent } from '@modules/patient/pages/new-patient-page/new-patient-page.component';



const routes: Routes = [
  {
    path: 'patient',
    loadChildren: () => import('@modules/patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: 'dating',
    loadChildren: () => import('@modules/dating/dating.module').then(m => m.DatingModule)
  },
  {
    path: 'library',
    loadChildren: () => import('@modules/library/library.module').then(m => m.LibraryModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('@modules/maintenance/maintenance.module').then(m => m.MaintenanceModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('@modules/configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path: 'help',
    loadChildren: () => import('@modules/help/help.module').then(m => m.HelpModule)
  },
  {
    path: 'users',
    loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'search',
    loadChildren: () => import('@modules/search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
