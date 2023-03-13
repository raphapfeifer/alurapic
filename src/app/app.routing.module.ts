import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequiresAutenticationGuard } from './core/auth/requires-autentication.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';


import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    { path: 'p/add',
        component: PhotoFormComponent,
        canActivate:[RequiresAutenticationGuard]
     },
     {
        path: 'p/:photoId',
        component: PhotoDetailsComponent
     },
    { 
        path: '**', 
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}