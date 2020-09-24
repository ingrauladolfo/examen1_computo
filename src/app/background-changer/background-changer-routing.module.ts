import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackgroundChangerPage } from './background-changer.page';

const routes: Routes = [
  {
    path: '',
    component: BackgroundChangerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackgroundChangerPageRoutingModule {}
