import { CanActivateFn } from '@angular/router';

export const isloggedGuard: CanActivateFn = (route, state) => {
  return true;
};
