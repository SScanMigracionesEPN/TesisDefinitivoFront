import { Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavPageComponent } from '@layout';
import { ActorComponent } from '@pages/strategy/actor/actor.component';
import { TopicComponent } from '@pages/strategy/topic/topic.component';
import { MatrixListComponent } from '@pages/strategy/matrix/matrix-list/matrix-list.component';
import { HomeComponent } from '@pages/strategy/home/home.component';
import { LoginComponent } from '@pages/auth/login/login.component';
import { RegisterComponent } from '@pages/auth/register/register.component';
import { ProjectListComponent } from '@pages/strategy/project/project-list/project-list.component';

export const routes: Routes = [
  {
    path: '',
    component: NavPageComponent,
    children: [
      {
        path: 'proyectos',
        component: ProjectListComponent,
      },
      {
        path: 'actores',
        component: ActorComponent,
      },
      {
        path: 'temas',
        component: TopicComponent,
      },
      {
        path: 'matrices',
        component: MatrixListComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: '**',
    redirectTo: '/login',
  },
];
