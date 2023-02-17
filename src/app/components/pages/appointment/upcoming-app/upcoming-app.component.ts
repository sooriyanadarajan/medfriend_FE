import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-app',
  templateUrl: './upcoming-app.component.html',
  styleUrls: ['./upcoming-app.component.scss']
})
export class UpcomingAppComponent implements OnInit {
  dataSet = [
    {
      slno: '01',
      name: 'John Brown',
      bookingid: 'ID0029',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      contact: 789456123,
      disease: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
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
      cancel: 'Cancel'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
