import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [App, Header, User, Tasks, Task, NewTask],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule, SharedModule]
})
export class AppModule { }