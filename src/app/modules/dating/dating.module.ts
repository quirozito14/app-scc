import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatingRoutingModule } from './dating-routing.module';
import { DatingPageComponent } from './pages/dating-page/dating-page.component';


@NgModule({
  declarations: [
    DatingPageComponent
  ],
  imports: [
    CommonModule,
    DatingRoutingModule
  ]
})
export class DatingModule { }
