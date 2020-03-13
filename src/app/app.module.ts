import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import { ExposantsComponent } from './modules/pages/exposants/exposants.component';
import { ParticipantsComponent } from './modules/pages/participants/participants.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    //ParticipantsComponent,
    //ExposantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule, 
    HttpClientModule,
    TableModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule { }
