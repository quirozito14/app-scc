import { DatingPageComponent } from './pages/dating-page/dating-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: DatingPageComponent,
  outlet: 'child'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatingRoutingModule { }
