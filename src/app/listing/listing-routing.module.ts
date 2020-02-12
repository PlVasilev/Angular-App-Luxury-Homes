import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: 'listing',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/listing/all'
            },
            {
                path: 'all',
                component: AllComponent
            },
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'edit',
                component: EditComponent
            },
            {
                path: 'details',
                component: DetailsComponent
            }
        ]
    }
];

export const ListingRoutingModule = RouterModule.forChild(routes);