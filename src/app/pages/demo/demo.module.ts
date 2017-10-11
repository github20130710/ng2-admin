import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule, ModalModule } from 'ngx-bootstrap';

import { Demo } from './demo.component';
import { routing } from './demo.routing';

@NgModule({
  imports: [
    BrowserModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    routing
  ],
  declarations: [
    Demo
  ]
})

export class DemoModule {}
