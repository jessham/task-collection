import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: 'task_list.component.html',
    styleUrls: ['task_list.component.css']
  })
  export class TaskListComponent implements OnInit {
  
    @Input() list;
    @Output() actionOnCheckbox = new EventEmitter();
    @Output() deleteTask = new EventEmitter();

    tasks = [];

    ngOnInit() {

    }
    
    ngOnChanges() {
      this.tasks = this.list;
    }

    editCheckbox(task) {
      this.actionOnCheckbox.emit(task);
    }

    delete(task) {
      this.deleteTask.emit(task);
    }
  }