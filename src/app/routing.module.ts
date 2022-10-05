import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeViewComponent } from './views/home.component';
import { LoginViewComponent } from './views/login.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: 'login', component: LoginViewComponent },
      { path: '**', redirectTo: 'home' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
