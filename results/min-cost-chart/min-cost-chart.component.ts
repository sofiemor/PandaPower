import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
//or
// import Chart from 'chart.js'

@Component({
  selector: 'app-min-cost-chart',
  templateUrl: './min-cost-chart.component.html',
  styleUrls: ['./min-cost-chart.component.css']
})

export class MinCostChartComponent implements OnInit {
  @Input() labels: string[] = [];
  @Input() label = '';
  @Input() costData: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createChart(this.labels, this.label, this.costData);
  }

  public chart: any;

  createChart(labels: string[], label: string, costData: string[]){
  
    this.chart = new Chart("costChart", {
      type: 'bar',

      data: {// values on X-Axis
        labels: labels, 
        datasets: [
          {
            label: label,
            data: costData,
            backgroundColor: 'rgb(147, 219, 119, 0.8)',
            borderColor: 'rgb(147, 219, 119, 1)', // Border color for the bars
            borderWidth: 2, // Width of the bar borders
            borderRadius: 5 // Radius to round the edges of the bars
            
          }
        ]
      },
      options: {
        aspectRatio: 1,
        scales: {
          x: {
            display: true, // Set to true to display the x-axis
            title: {
              display: true,
              text: 'Refinery', // Replace with your x-axis label
              font: {
                weight: 'bold' // Make the x-axis title text bold
              }
            },
          },
          y: {
            display: true, // Set to true to display the y-axis
            title: {
              display: true,
              text: 'Cost (thousands of dollars)', // Replace with your y-axis label
              font: {
                weight: 'bold' // Make the x-axis title text bold
              }
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            position: 'bottom', // You can set the legend position to 'top', 'left', 'right', or 'bottom'
            labels: {
              padding: 30 // Adjust the padding here to add space between the legend and the chart
            }
          }
        },
    }
    });
  }

}