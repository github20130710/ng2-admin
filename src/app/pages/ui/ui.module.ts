import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UI } from './ui.component';
import { routing } from './ui.routing';
import { TableModule } from './table/table.module';

@NgModule({
  declarations: [
    UI
  ],
  imports: [
    BrowserModule,
    TableModule,
    routing
  ],
  bootstrap: [UI]
})

export class UIModule { }
