import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private tokenService: TokenStorageService
  ) {}
  public logOut = (): void => {
    this.tokenService.signOut();
    this.router.navigateByUrl('');
  };
}
