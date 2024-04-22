import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { jwtDecode } from 'jwt-decode';
import { LoggedInUser } from '../interfaces/user';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  //const token = localStorage.getItem('access_token')

  if (userService.user()) {
    return true;
  } 

  // try {
  //   if (token && jwtDecode(token).sub as unknown as LoggedInUser) {
  //     return true;
  //   }
  // } catch (err) {
  //   console.log(err)
  // }
  
  return router.navigate(['login']);
};
