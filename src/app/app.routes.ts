import { Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavPageComponent } from '@layout';
import { ActorComponent } from '@pages/strategy/actor/actor.component';




export const routes: Routes = [
    {
        path:'',
        component:NavPageComponent,
        children:[
            {
                path:'actores',
                component:ActorComponent
            }
        ]
    }
];
