import { Routes, RouterModule } from '@angular/router';
import { UI } from './ui.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'ui',
    component: UI,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', loadChildren: 'app/pages/ui/table/table.module#TableModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
