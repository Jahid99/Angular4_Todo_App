import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  newTask = "";

  pushTask = function(){
  	if(this.newTask!=""){
  		this.tasks.push(this.newTask);
  		this.newTask="";
  	}
  }

  removeTask = function(index){
  	this.tasks.splice(index,1);
  }

}
