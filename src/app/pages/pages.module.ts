import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';

import { Pages } from './pages.component';
import { DemoModule } from './demo/demo.module';
import { UIModule } from './ui/ui.module';

@NgModule({
  imports: [CommonModule, routing, DemoModule, UIModule],
  declarations: [Pages]
})

export class PagesModule {
}
