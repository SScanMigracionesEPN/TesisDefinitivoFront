import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { graphqlProvider } from './graphql.provider';
import { exceptionsInterceptor } from './interceptors/exceptions.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    graphqlProvider,
    provideHttpClient(
      withInterceptors([exceptionsInterceptor]),
    )
  ],
};
