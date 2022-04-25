import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';
import { Router, RouterModule } from '@angular/router';
import { PatientModule } from '@modules/patient/patient.module';


export const routes= [
  {path: '', component: HomePageComponent, patchMatch: 'full'}
]

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HomeRoutingModule,
    PatientModule
  ]
})
export class HomeModule { }
