import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-cdu-chart',
  templateUrl: './cdu-chart.component.html',
  styleUrls: ['./cdu-chart.component.css']
})
export class CduChartComponent implements AfterViewInit {
  @Input() refinery = '';
  @Input() cduUtil = '';
  used = '';
  notUsed = '';
  usedPercent = '';
  notUsedPercent = '';

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  chart: Chart<"pie", string[], string> | undefined;

  // Inside CduChartComponent
  ngAfterViewInit(): void {
    this.used = `${this.cduUtil}`;
    this.notUsed = `${(1 - parseFloat(this.used))}`;
    this.usedPercent = `${Math.round(parseFloat(this.used) * 100)}%`
    this.notUsedPercent = `${Math.round(parseFloat(this.notUsed) * 100)}%`
    
    if (this.chartCanvas && this.chartCanvas.nativeElement) {
      this.createChart(this.refinery, this.used, this.notUsed);
    }
  }

  private createChart(refinery: string, used: string, notUsed: string): void {
    console.log('Refinery: ', refinery);
    const ctx: CanvasRenderingContext2D = this.chartCanvas.nativeElement.getContext('2d');
    const chartData = {
      
      datasets: [{
        data: [used, notUsed],
        backgroundColor: ['rgb(255, 186, 73, 1)', '#DEDEE3'],
        hoverOffset: 4
      }],
    };
    const chartOptions = {
      aspectRatio: 4,
      plugins: {
        legend: {
          display: false // Set this to false to hide the legend
        },

        tooltip: {
          callbacks: {
            label: (context: any) => {
              let label = '';
              if (context.dataset.data[context.dataIndex] === used) {
                label = `Used: ${this.usedPercent}`;
              } else {
                label = `Not Used: ${this.notUsedPercent}`;
              }
              return label;
            },
          },
        },
      }
    };

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: chartData,
      options: chartOptions
    });
  }
}
