import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackgroundChangerPageRoutingModule } from './background-changer-routing.module';

import { BackgroundChangerPage } from './background-changer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackgroundChangerPageRoutingModule
  ],
  declarations: [BackgroundChangerPage]
})
export class BackgroundChangerPageModule {}
