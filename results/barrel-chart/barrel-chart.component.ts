import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
//or
// import Chart from 'chart.js'

@Component({
  selector: 'app-barrel-chart',
  templateUrl: './barrel-chart.component.html',
  styleUrls: ['./barrel-chart.component.css']
})

export class BarrelChartComponent implements OnInit {
  @Input() labels: string[] = [];
  @Input() prodType: string[] = [];
  @Input() gasData: string[] = [];
  @Input() distillateData: string[] = [];
  @Input() lightEndData: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createChart(this.labels, this.prodType, this.gasData, this.distillateData, this.lightEndData);
  }

  public chart: any;

  createChart(labels: string[], prodType: string[], gas: string[], distillate: string[], lightEnd: string[]){
  
    this.chart = new Chart("barrelChart", {
      type: 'bar',

      data: {// values on X-Axis
        labels: labels, 
        datasets: [
          {
            label: prodType[0],
            data: gas,
            backgroundColor: 'rgb(29, 80, 147, 0.8)',
            borderColor: 'rgb(29, 80, 147, 1)', // Border color for the bars
            borderWidth: 2, // Width of the bar borders
            borderRadius: 2 // Radius to round the edges of the bars
          },
          {
            label: prodType[1],
            data: distillate,
            backgroundColor: 'rgb(137, 210, 220, 0.8)',
            borderColor: 'rgb(137, 210, 220, 1)', // Border color for the bars
            borderWidth: 2, // Width of the bar borders
            borderRadius: 2 // Radius to round the edges of the bars
          },
          {
            label: prodType[2],
            data: lightEnd,
            backgroundColor: 'rgb(255, 186, 73, 0.8)',
            borderColor: 'rgb(255, 186, 73, 1)', // Border color for the bars
            borderWidth: 2, // Width of the bar borders
            borderRadius: 2 // Radius to round the edges of the bars
          }
        ]
      },
      options: {
        aspectRatio: 0.75,
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
              text: 'Number of Barrels (MBD)', // Replace with your y-axis label
              font: {
                weight: 'bold' // Make the x-axis title text bold
              }
            },
          },
        },
        plugins: {
          legend: {
            display: true,
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