import { Routes, RouterModule } from '@angular/router';
import { Demo } from './demo.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: Demo
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
