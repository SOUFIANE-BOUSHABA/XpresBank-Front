import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: []
})
export class StatisticsComponent implements OnInit {
  totalUsers: number = 0;
  totalTransactions: number = 0;
  totalAccountBalance: number = 0;

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  public lineChartData: ChartDataset<'line'>[] = [
    { data: [0, 0, 0, 0, 0, 0], label: 'Transactions Over Time' },
  ];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe(data => {
      this.totalUsers = data.totalUsers;
      this.totalTransactions = data.totalTransactions;
      this.totalAccountBalance = data.totalAccountBalance;

      // Update the mock data for the chart based on actual data
      this.lineChartData = [
        { data: [10, 25, 30, 45, 60, 75], label: 'Transactions Over Time' },
      ];
    });
  }
}
