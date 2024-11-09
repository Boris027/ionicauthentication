import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash/loading.json',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./PageComponents/General/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'people',
    canActivate:[AuthGuard],
    loadChildren: () => import('./PageComponents/General/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    canActivate:[AuthGuard],
    path: 'groups',
    loadChildren: () => import('./PageComponents/General/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'splash/:id',
    loadChildren: () => import('./PageComponents/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./PageComponents/CRUD/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./PageComponents/CRUD/login/login.module').then( m => m.LoginPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
