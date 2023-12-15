import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then( m => m.ProfesorPageModule),
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule),
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule),
    
  },
  {
    path: 'inicio-profesor',
    loadChildren: () => import('./inicio-profesor/inicio-profesor.module').then( m => m.InicioProfesorPageModule),
    
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./userslist/userslist.module').then( m => m.UserslistPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./notfoundpage/notfoundpage.module').then( m => m.NotfoundpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }







