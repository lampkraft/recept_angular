import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DoLogin } from './state/login.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'recept-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	title: string = "Login";
	username: string;
	password: string;

	constructor (private store: Store<any>, private router: Router) {

	}

	ngOnInit () {
	}

	login () {
		this.store.dispatch(new DoLogin({ username: this.username, password: this.password }));
		this.router.navigateByUrl('/recipes');
	}

	updateUserName (username: string) {

	}

	updatePassword (password: string) {

	}
  
}
