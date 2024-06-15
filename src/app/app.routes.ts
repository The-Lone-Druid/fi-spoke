import { Routes } from '@angular/router';

export const routes: Routes = [
  // temporary redirect
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'dashboard',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard-layout/dashboard-layout.module').then(
        (m) => m.DashboardLayoutModule
      ),
  },
];
