import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <div>
      <h1 (click)="gotoHome()">Login</h1>
    </div>
  `,
})
export class LoginViewComponent {
  constructor(private router: Router) {}
  gotoHome() {
    this.router.navigateByUrl('/home');
  }
}
