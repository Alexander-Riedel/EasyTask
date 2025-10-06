import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserObject } from './user.model';


@Component({
	selector: 'app-user',
	imports: [],
	templateUrl: './user.html',
	styleUrl: './user.scss'
})
export class User {
	@Input({ required: true }) user!: UserObject;
	@Input({ required: true }) selected!: boolean;
	@Output() select = new EventEmitter<string>();

	get imagePath() {
		return 'users/' + this.user.avatar;
	}

	onSelectUser(id: string) {
		this.select.emit(this.user.id);
	}
}
