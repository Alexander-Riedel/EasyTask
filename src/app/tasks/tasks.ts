import { Component, Input } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
	selector: 'app-tasks',
	standalone: false,
	templateUrl: './tasks.html',
	styleUrl: './tasks.scss'
})
export class Tasks {
	@Input({ required: true }) userId!: string;
	@Input({ required: true }) name!: string;
	isAddingTask = false;

	constructor(private tasksService: TasksService) { }

	get selectedUserTasks() {
		return this.tasksService.getUserTasks(this.userId);
	}

	onStartAddTask() {
		this.isAddingTask = true;
	}

	onCloseAddTask() {
		this.isAddingTask = false;
	}

}
