import {Component, Input, OnInit} from '@angular/core';
import CanvasJS from '../../../../../assets/canvasjs.min';
@Component({
  selector: 'app-algorithm-graph',
  templateUrl: './algorithm-graph.component.html',
  styleUrls: ['./algorithm-graph.component.scss']
})
export class AlgorithmGraphComponent implements OnInit {
  @Input() data: number[];
  @Input() algorithm: string;
  constructor() { }

  ngOnInit() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: false,
      interactivityEnabled: false,
      zoomEnabled: false,
      panEnabled: false,
      title: {
        text: this.algorithm,
      },
      data: [{
        type: 'column',
        dataPoints: [
          { y: 71, label: 'Apple' },
          { y: 55, label: 'Mango' },
          { y: 50, label: 'Orange' },
          { y: 65, label: 'Banana' },
          { y: 95, label: 'Pineapple' },
          { y: 68, label: 'Pears' },
          { y: 28, label: 'Grapes' },
          { y: 34, label: 'Lychee' },
          { y: 14, label: 'Jackfruit' }
        ]
      }]
    });

    chart.render();
  }
  public runAlgorithm() {
  }

}
