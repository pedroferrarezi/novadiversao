import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrsinhoPageRoutingModule } from './ursinho-routing.module';

import { UrsinhoPage } from './ursinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrsinhoPageRoutingModule
  ],
  declarations: [UrsinhoPage]
})
export class UrsinhoPageModule {}
