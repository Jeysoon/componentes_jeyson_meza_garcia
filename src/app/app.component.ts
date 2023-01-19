import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first_assignment';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  public show = false;
  public status = false;
  public programatically = true;

  toggleSidebar(status: boolean) {
    this.status = status;
  }

  onProgramatically(){
    // this.status = event;
    // this.programatically = event;
    this.status = !this.status;
    this.programatically = !this.programatically;
  }
}
