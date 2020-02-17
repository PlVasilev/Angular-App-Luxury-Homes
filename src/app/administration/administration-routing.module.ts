import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MessagesComponent } from '../contactMessage/add/add.component';


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
                component: MessagesComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                }
            },
            {
                path: 'messages',
                component: MessagesComponent,
                canActivate: [AuthGuard],
                data: {
                    isAdmin: true
                }
            },
        ]
    }
];

export const AdministrationRoutingModule = RouterModule.forChild(routes);