import { Component, Inject } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { Role } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AUTH_SERVICE, TOKEN_STORAGE_SERVICE } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any = {
    username: null,
    password: null
  };
  errorMessage = '';
  role: Role = -1;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getUser().role;
      this.route.navigate(["/"]);
    }
  }

  Login(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);
        this.role = this.tokenStorage.getUser().role;
        this.route.navigate(["/"]);
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }


}
