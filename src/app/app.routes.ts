import { Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavPageComponent } from '@layout';
import { ActorComponent } from '@pages/strategy/actor/actor.component';
import { TopicComponent } from '@pages/strategy/topic/topic.component';
import { MatrixListComponent } from '@pages/strategy/matrix/matrix-list/matrix-list.component';
import { HomeComponent } from '@pages/strategy/home/home.component';




export const routes: Routes = [
    {
        path:'',
        component:NavPageComponent,
        children:[
            {
                path:'actores',
                component:ActorComponent
            },
            {
                path:'temas',
                component:TopicComponent
            },
            {
                path:'matrices',
                component:MatrixListComponent
            },
            {
                path:'inicio',
                component:HomeComponent
            },
        ]
    },

    {
        path:'auth',
        component:NavPageComponent,
        children:[
            {
                path:'22',
                component:ActorComponent
            }
        ]
    },


   {
     path:'**',
     redirectTo:'/login'
   }
];
