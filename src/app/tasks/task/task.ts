import { Component, inject, Input } from '@angular/core';

import { TaskObject } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-task',
	standalone: false,
	templateUrl: './task.html',
	styleUrl: './task.scss'
})
export class Task {
	@Input({ required: true }) task!: TaskObject;
	private tasksService = inject(TasksService);

	onCompleteTask() {
		this.tasksService.removeTask(this.task.id);
	}

}
