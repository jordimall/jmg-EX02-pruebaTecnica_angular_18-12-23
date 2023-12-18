import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

export const isloggedGuard: CanActivateFn = (route, state) => {
  const token: TokenStorageService = inject(TokenStorageService);
  const router: Router = inject(Router);
  if (token.getToken()) {
    return true;
  }
  router.navigateByUrl('');
  return false;
};
