import { Component, Input } from '@angular/core';

interface TaskObject {
	id: string,
	userId: string,
	title: string,
	summary: string,
	dueDate: string
}

@Component({
	selector: 'app-task',
	imports: [],
	templateUrl: './task.html',
	styleUrl: './task.scss'
})
export class Task {
	@Input({ required: true }) task!: TaskObject;

}
