import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { jwtDecode } from 'jwt-decode';
import { LoggedInUser } from '../interfaces/user';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  const token = localStorage.getItem('access_token')

  if (userService.user()) {
    return true;
  } 

  try {
      if (token) {
        const decodedToken = jwtDecode(token).sub as unknown as LoggedInUser
        userService.user.set({
          fullname: decodedToken.fullname,
          email: decodedToken.email
        })
       return true;
      }
   } catch (err) {
     console.log(err)
   }
  
  return router.navigate(['login'], { queryParams: { returnUrl: state.url }});
};
