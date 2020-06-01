import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BobesponjaPageRoutingModule } from './bobesponja-routing.module';

import { BobesponjaPage } from './bobesponja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BobesponjaPageRoutingModule
  ],
  declarations: [BobesponjaPage]
})
export class BobesponjaPageModule {}
