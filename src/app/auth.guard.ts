import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './Services/DataService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataService: DataService,
    private router: Router) { }
  canActivate() {
    if (this.dataService.authFunction())
      return true;
    else {
      this.router.navigateByUrl('/form');
      return false;
    }
  }

}
