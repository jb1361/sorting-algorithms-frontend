import {Component, Input, OnInit} from '@angular/core';
import CanvasJS from '../../../../../assets/canvasjs.min';
@Component({
  selector: 'app-algorithm-graph',
  templateUrl: './algorithm-graph.component.html',
  styleUrls: ['./algorithm-graph.component.scss']
})
export class AlgorithmGraphComponent implements OnInit {
  @Input() data: {};
  @Input() algorithm: string;
  @Input() size: number;
  constructor() { }

  ngOnInit() {
    if (!this.data) {
      this.initializeData(this.size ? this.size : 25);
    }
    CanvasJS.addColorSet('blue', ['#0000b2']);
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: false,
      interactivityEnabled: false,
      zoomEnabled: false,
      panEnabled: false,
      colorSet: 'blue',
      dataPointMaxWidth: 20,
      width: (this.size * 20),
      axisX: {
        interval: 1
      },
      title: {
        text: this.algorithm,
      },
      data: [{
        type: 'column',
        dataPoints: this.data
      }]
    });

    chart.render();
  }
  public runAlgorithm() {
  }
  public  initializeData(size: number) {
    const data = [];
    for (let i = 1; i <= size; i++) {
      data.push({x: i, y: i});
    }
    this.size = size;
    // this.data = data;
    this.data = this.shuffle(data);
  }
 public shuffle(array) {
   for (let i = array.length - 1; i >= 0; i--) {
     const randomIndex = Math.floor(Math.random() * (i + 1));
     const itemAtIndex = array[randomIndex];
     array[randomIndex] = array[i];
     array[randomIndex]['x'] = array[i]['x'];
     array[i] = itemAtIndex;
     array[i]['x'] = i;
   }
    return array;
  }


}
