import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: User = {
    email: '',
    password: ''
  };

  constructor(private service: UsersService) { }

  login = (): void => {
    this.service.login(this.user).subscribe(
      response => {
        localStorage.setItem("token", response.token);
        alert(response.message);
      },
      error => {
        alert(error.error.message);
      }
    );
  };
}
