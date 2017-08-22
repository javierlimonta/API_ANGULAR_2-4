import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent implements OnInit {
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [78, 10, 12];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
