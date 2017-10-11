import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App } from './app.component';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    PagesModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
