import { Component } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './user/dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
    selector: 'app-root',
    imports: [Header, User, Tasks],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    users = DUMMY_USERS;
    selectedUserId = 'u1';

    get selectedUser() {
        return this.users.find((user) => user.id === this.selectedUserId)!;
    }

    onSelectUser(id: string) {
        this.selectedUserId = id;
    }
}
