import { Component } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './user/dummy-users';

@Component({
    selector: 'app-root',
    imports: [Header, User],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    users = DUMMY_USERS;

    onSelectUser(id: string) {
        console.log(id)
    }
}
