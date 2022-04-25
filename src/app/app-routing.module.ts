import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPageComponent } from '@modules/patient/pages/patient-page/patient-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
