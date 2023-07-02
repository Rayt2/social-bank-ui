import { Component,Input,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Account Activity'
      },
      subtitle: {
        text: '1234500909'
      },
      tooltip: {
        split: true,
        valueSuffix: ' Ruppes'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: [{
        name: 'Jan',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Feb',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'March',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'April',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'May',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
