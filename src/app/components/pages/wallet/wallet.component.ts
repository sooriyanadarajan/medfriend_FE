import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

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

  ];

  chartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        scaleLabel: {
          display: false,
          labelString: "Number of Reads",
        },
      }]
    },
  };
  chartData = [
    {
      data: [350, 250, 400, 200, 300, 220, 390, 190, 400, 230, 380, 300],
      label: '',
    },
    {
      data: [300, 455, 140, 340, 240, 320, 200, 450, 290, 350, 220, 350],
      label: '',
    }
  ];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(182,218,212,0.6)',
      borderColor: 'rgba(68,157,139,1)',
      pointBackgroundColor: 'rgba(68,157,139,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(68,157,139,1)'
    },
    { // second color
      backgroundColor: 'rgba(247,42,99,0.2)',
      borderColor: 'rgba(247,42,99,1)',
      pointBackgroundColor: 'rgba(238,126,110,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(238,126,110,1)'
    }];
  chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // chartPlugins = [pluginDataLabels];

  formatOne = () => '';

  data = '<img src="../../../../assets/img/icons/income.svg">'

  // modal
  isVisible = false;
  isVisibleone = false;
  isVisibletwo = false;
  constructor() { }

  showModal(): void {
    this.isVisible = true;
  }

  showModalone(): void {
    this.isVisibleone = true;
  }

  showModaltwo(): void {
    this.isVisibletwo = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisibleone = false;
    this.isVisibletwo = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleone = false;
    this.isVisibletwo = false;
  }

  ngOnInit(): void {
  }

}
