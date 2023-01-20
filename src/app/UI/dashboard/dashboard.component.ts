import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  data: {title: string, imgPath: string}[] = [
    {title: 'Tokyo', imgPath: 'https://realestate-resources.scdn2.secure.raxcdn.com/wp-content/uploads/2020/06/iStock-1152233837-1020x500.jpg'},
    {title: 'Mexico', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Mexico-3271_-_Z%C3%B3calo_%282214738586%29.jpg/800px-Mexico-3271_-_Z%C3%B3calo_%282214738586%29.jpg'},
    {title: 'France', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Construction_tour_eiffel6.JPG'},
    {title: 'Canada', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Parliamenthill.jpg/1024px-Parliamenthill.jpg'},
  ]

  ngOnInit(): void {
  }

}
