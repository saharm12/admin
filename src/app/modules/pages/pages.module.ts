import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { ExposantsComponent } from './exposants/exposants.component';
import { ParticipantsComponent } from './participants/participants.component';


@NgModule({
  declarations: [PagesComponent, DashBoardComponent,ExposantsComponent,ParticipantsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ]
})
export class PagesModule {
}
