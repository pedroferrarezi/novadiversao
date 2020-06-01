import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BobesponjaPage } from './bobesponja.page';

const routes: Routes = [
  {
    path: '',
    component: BobesponjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BobesponjaPageRoutingModule {}
