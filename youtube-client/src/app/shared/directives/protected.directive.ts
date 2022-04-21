import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Directive({
  selector: '[appProtected]',
})
export class ProtectedDirective {
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
  ) {
    if (!authService.isAuth()) {
      this.location.replace('/');
      this.router.navigate(['LoginComponent']);
    }
  }
}
