import { Component, EventEmitter, Input, Output } from '@angular/core';

interface UserObject {
	id: string;
	avatar: string;
	name: string;
};

@Component({
	selector: 'app-user',
	imports: [],
	templateUrl: './user.html',
	styleUrl: './user.scss'
})
export class User {
	@Input({ required: true }) user!: UserObject;
	// @Input({ required: true }) id!: string;
	// @Input({ required: true }) avatar!: string;
	// @Input({ required: true }) name!: string;
	@Output() select = new EventEmitter<string>();

	get imagePath() {
		return 'users/' + this.user.avatar;
	}

	onSelectUser(id: string) {
		this.select.emit(this.user.id);
	}
}
