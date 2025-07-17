import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'expense',
    loadComponent: () => import('./pages/expense/expense.page').then((m) => m.ExpensePage),
  },
  {
    path: 'income',
    loadComponent: () => import('./pages/income/income.page').then( m => m.IncomePage)
  },
  {
    path: 'category',
    loadComponent: () => import('./pages/category/category.page').then( m => m.CategoryPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
