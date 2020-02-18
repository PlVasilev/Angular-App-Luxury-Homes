import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddComponent } from '../contactMessage/add/add.component';
import { AllComponent } from '../contactMessage/all/all.component';



const routes: Routes = [
    {
        path: 'administration',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/administration/contact'
            },
            {
                path: 'contact',
                component: AddComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                }
            },
            {
                path: 'messages',
                component: AllComponent,
                canActivate: [AuthGuard],
                data: {
                    isAdmin: true
                }
            },
        ]
    }
];

export const AdministrationRoutingModule = RouterModule.forChild(routes);