import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenStorageService
  ) {}
  userName: string = '';
  password: string = '';
  user: User | any;
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(this.userName, Validators.required),
    password: new FormControl(this.password, Validators.required),
  });

  public onSubmit = (): void => {
    this.user = this.loginForm.value as User;
    let result: boolean = this.authService.loggin(this.user);
    if (result) {
      this.tokenService.saveToken();
      this.router.navigateByUrl('/home');
    } else {
      document.getElementById('errorLogin')?.classList.remove('hidden');
    }
  };
}
