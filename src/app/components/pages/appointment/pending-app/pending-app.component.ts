import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-app',
  templateUrl: './pending-app.component.html',
  styleUrls: ['./pending-app.component.scss']
})
export class PendingAppComponent implements OnInit {
  dataSet = [
    {
      slno: '01',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      approve: 'Approve',
      cancel: 'Cancel'
    },
    {
      slno: '02',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      approve: 'Approve',
      cancel: 'Cancel'
    },
    {
      slno: '03',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      approve: 'Approve',
      cancel: 'Cancel'
    },
    {
      slno: '04',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      approve: 'Approve',
      cancel: 'Cancel'
    },
    {
      slno: '05',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
      approve: 'Approve',
      cancel: 'Cancel'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
