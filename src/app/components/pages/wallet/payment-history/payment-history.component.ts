import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnInit {
  dataSet = [
    {
      blno: '0121',
      name: 'John Brown',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      disease: 'Fever',
      charges: '$180',
      tax: '$3',
      total: '$183'
    },
    {
      blno: '0121',
      name: 'John Brown',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      disease: 'Fever',
      charges: '$180',
      tax: '$3',
      total: '$183'
    },

    {
      blno: '0121',
      name: 'John Brown',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      disease: 'Fever',
      charges: '$180',
      tax: '$3',
      total: '$183'
    },

    {
      blno: '0121',
      name: 'John Brown',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      disease: 'Fever',
      charges: '$180',
      tax: '$3',
      total: '$183'
    },

    {
      blno: '0121',
      name: 'John Brown',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      disease: 'Fever',
      charges: '$180',
      tax: '$3',
      total: '$183'
    },

    {
      blno: '0121',
      name: 'John Brown',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      disease: 'Fever',
      charges: '$180',
      tax: '$3',
      total: '$183'
    },

    {
      blno: '0121',
      name: 'John Brown',
      date: '11/3/2021',
      timing: '11AM - 12PM',
      disease: 'Fever',
      charges: '$180',
      tax: '$3',
      total: '$183'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
