import { Component, Input } from '@angular/core';

import { TaskObject } from './task.model';


@Component({
	selector: 'app-task',
	imports: [],
	templateUrl: './task.html',
	styleUrl: './task.scss'
})
export class Task {
	@Input({ required: true }) task!: TaskObject;

}
