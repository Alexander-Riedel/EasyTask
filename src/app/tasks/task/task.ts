import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TaskObject } from './task.model';
import { Card } from "../../shared/card/card";


@Component({
	selector: 'app-task',
	imports: [Card, DatePipe],
	templateUrl: './task.html',
	styleUrl: './task.scss'
})
export class Task {
	@Input({ required: true }) task!: TaskObject;
	@Output() complete = new EventEmitter<string>();

	onCompleteTask() {
		this.complete.emit(this.task.id);
	}

}
