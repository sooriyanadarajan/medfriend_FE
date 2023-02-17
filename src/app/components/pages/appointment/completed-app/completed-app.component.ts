import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-app',
  templateUrl: './completed-app.component.html',
  styleUrls: ['./completed-app.component.scss']
})
export class CompletedAppComponent implements OnInit {
  dataSet = [
    {
      slno: '01',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      cancel: 'Completed'
    },
    {
      slno: '02',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      cancel: 'Completed'
    },
    {
      slno: '03',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      cancel: 'Completed'
    },
    {
      slno: '04',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      cancel: 'Completed'
    },
    {
      slno: '05',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      cancel: 'Completed'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
