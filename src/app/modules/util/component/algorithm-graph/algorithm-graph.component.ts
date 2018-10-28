import {Component, Input, OnInit} from '@angular/core';
import {merge} from 'rxjs';

@Component({
  selector: 'app-algorithm-graph',
  templateUrl: './algorithm-graph.component.html',
  styleUrls: ['./algorithm-graph.component.scss']
})
export class AlgorithmGraphComponent implements OnInit {
  @Input() data: number[];
  @Input() algorithm: string;
  @Input() size: number;
  @Input() executionDelay: number;
  chart: any;
  constructor() { }

  ngOnInit() {
    if (!this.data) {
      this.initializeData(this.size ? this.size : 100);
    }
    if (!this.executionDelay) {
      this.executionDelay = 500;
    }
   // this.chart.render();

    this.runAlgorithm('mergesort');
    }
  public runAlgorithm(algorithm: string) {
    switch (algorithm) {
      case 'bubblesort':
          this.bubbleSort(this.data);
        break;
      case 'mergesort':
        this.mergeSort(this.data);
        break;
      default: return;
    }
  }
  public  initializeData(size: number) {
    const data = [];
    for (let i = 1; i <= size; i++) {
      data.push(i);
    }
    this.size = size;
    this.data = this.shuffle(data);
  }
 public shuffle(array) {
   for (let i = array.length - 1; i >= 0; i--) {
     const randomIndex = Math.floor(Math.random() * (i + 1));
     const itemAtIndex = array[randomIndex];
     array[randomIndex] = array[i];
     array[i] = itemAtIndex;
   }
    return array;
  }

  public bubbleSort(array: number[]) {
      for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array.length; j++) {
            setTimeout(() => {
            if (array[i] < array[j]) {
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            this.data = array;
          }, this.executionDelay);
        }
      }
  }
  public mergeSort(array: number[]) {
    const len = array.length;
    if (len < 2) {
      return array;
    }
    const mid = Math.floor(len / 2),
      left = array.slice(0, mid),
      right = array.slice(mid);
    // send left and right to the mergeSort to broke it down into pieces
    // then merge those
    setTimeout(() => {
      return this.merge(this.mergeSort(left), this.mergeSort(right));
    }, this.executionDelay);
  }
  public merge(left: number[], right: number[]) {
    const result = [];
    const lLen = left.length;
    const rLen = right.length;
    console.log(left);
    let r = 0;
    let l = 0;
    while (l < lLen && r < rLen) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    this.data = result;
    // remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }
}

