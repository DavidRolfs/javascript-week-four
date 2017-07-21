import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatLngFormComponent } from "./lat-lng-form/lat-lng-form.component";


const appRoutes: Routes = [
  {
    path: '',
    component: LatLngFormComponent
  }
]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
