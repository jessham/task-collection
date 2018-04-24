import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

import { Task } from '../task.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

  totalTasks: number = 0;
  totalDoneTasks: number = 0;
  
  tasks = [];
  foundTasks = [];
  
  user = {
    id: '0f9fc55f5ebdadf05439d4fa5034c1a9',
    imgURL: '../assets/profile_photo.jpg',
    fullname: 'Jessica Miyuki Ham'
  };
  
  newTask = new Task('',false,0,this.user.id);

  constructor(
    private listService: ListService
  ) { }
  
  ngOnInit() {
    this.getTasks();
  }
  
  getTasks() {
    this.listService.getTasks(this.user.id)
    .then(result => {
      // storing retrieved tasks
      this.tasks = result.docs;
      this.foundTasks = result.docs;
      // updating total number of tasks
      this.totalTasks = this.tasks.length;
      this.totalDoneTasks = 0;
      for (var i in this.tasks)
        if (this.tasks[i].done == true) this.totalDoneTasks++;
    })
    .catch(error => {
      alert('An error occurred while retrieving the tasks list. Please try again later.');
    });
  }
  
  addTask() {
    if (this.newTask.text != '') {
      this.newTask.creation_date = Date.now();
      this.listService.addTask(this.newTask)
        .then((result) => {
          // locally adding task
          this.tasks.push(result);
          this.totalTasks++;
          // clearing input
          this.newTask = new Task('',false,0,this.user.id);
        })
        .catch((error) => {
          alert('An error occurred while adding the task. Please try again later.');
        });
    } else
      alert('Please insert a text.');
  }

  deleteTask(task) {
    this.listService.deleteTask(task)
    .then(result => {
      // locally removing task
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index,1);
    })
    .catch(error => {
      alert('An error occurred while deleting the task. Please try again later.');
    });
  }

  actionOnCheckbox(task) {
    task.done = !task.done;
    this.listService.updateTask(task)
    .then(result => {
        // updating task database info
        task._rev = result._rev;
        // if task was checked before
        if (task.done == true) this.totalDoneTasks--;
        else this.totalDoneTasks++;
      })
      .catch(error => {
        // reverting failed modification
        task.done = !task.done;
        alert('An error occurred. Please try again.');
      });
  }

  searchTask(event) {
    // if backspace key is pressed
    if (event.keyCode == 8)
      this.foundTasks = this.tasks;
    
    var filteredTasks = this.foundTasks.filter(t => t.text.toLowerCase().includes(event.target.value.toLowerCase()));
    this.foundTasks = filteredTasks;
  }

  clearInput(id) {
    var element = <HTMLInputElement> document.getElementById(id);
    element.value = "";
  }
}
