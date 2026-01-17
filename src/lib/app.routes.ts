import { Routes } from '@angular/router';
// import { AppLayout } from './app/layout/component/app.layout';
// import { Dashboard } from './app/pages/dashboard/dashboard';
// import { Documentation } from './app/pages/documentation/documentation';
// import { Landing } from './app/pages/landing/landing';
// import { Notfound } from './app/pages/notfound/notfound';
import { AuthGuard } from 'xl-auth';
import {GLOBAL_ROUTE_STORE, XL_AUTH_GUARD_TOKEN} from 'xl-util';
import { AppLayout } from './component/app.layout';
export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canActivate: [XL_AUTH_GUARD_TOKEN],
        children: [
            // { path: '', component: Dashboard },
            // ...GLOBAL_ROUTE_STORE,
            {
                path: '',
                loadChildren: () => import('xl-util')
                    .then(m => m.GLOBAL_ROUTE_STORE)
            }
            // { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            // { path: 'documentation', component: Documentation },
            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },


            // { path: '',
            //     loadChildren: () => import('appartments').then(m => m.APARTMENTS_ROUTES)
            // },

            // {
            //   path: '',
            //   loadChildren: () => import('xl-customer').then(m => m.xlCustomerRoutes)
            // },

            // {
            //     path: '',
            //     loadChildren: () => import('xl-auth').then(r => r.routes)
            // }

            // {
            //     path: 'customer',
            //     loadChildren: () =>
            //         import('customer').then(m => m.CUSTOMER_ROUTES),
            // },
        ]
    },
    // { path: 'landing', component: Landing },
    // { path: 'notfound', component: Notfound },
    // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    // { path: 'login', loadComponent: () => import('./app/pages/auth/login').then(m => m.Login) },
    // { path: 'login', loadComponent: () => import('./app/pages/auth/login').then(m => m.Login) },
    // { path: '**', redirectTo: '/notfound' },

];
