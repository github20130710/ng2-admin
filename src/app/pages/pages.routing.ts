import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { path: 'demo', loadChildren: 'app/pages/demo/demo.module#DemoModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UIModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
