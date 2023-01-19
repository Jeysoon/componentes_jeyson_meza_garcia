import { Component, Output, EventEmitter, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  constructor() { }
  public sidebarIsOpen = true;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Input() currentStatus = true;
  ngOnInit(): void {
    // this.sidebarIsOpen = this.closeToggleProgramatically;
  }

  sidebarHandler(){
    this.sidebarIsOpen = !this.sidebarIsOpen;
    this.toggle.emit(this.sidebarIsOpen);
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.sidebarIsOpen = !this.sidebarIsOpen;
  }

}
