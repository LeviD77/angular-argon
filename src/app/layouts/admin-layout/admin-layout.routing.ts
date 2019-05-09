import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CanActivateViaAuthGuard } from 'src/app/guards/login-guard';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'tables',
        component: TablesComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'icons',
        component: IconsComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'maps',
        component: MapsComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    }
];
