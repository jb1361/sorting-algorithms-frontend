import {Component, Input, OnInit} from '@angular/core';

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
  algorithmIndex: number;
  constructor() { }

  ngOnInit() {
    if (!this.data) {
      this.initializeData(this.size ? this.size : 25);
    }
    if (!this.executionDelay) {
      this.executionDelay = 200;
    }
   // this.chart.render();

    this.runAlgorithm('bubblesort');
    }
  public runAlgorithm(algorithm: string) {
    switch (algorithm) {
      case 'bubblesort':
          this.bubbleSort(this.data);
        break;
      case 'mergesort':
        this.data = this.mergeSort(this.data);
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
              this.algorithmIndex = i;
            }, i * this.executionDelay);
        }
      }
  }
  public mergeSort(array: number[]) {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    // this.data = this.merge(this.mergeSort(left), this.mergeSort(right));
      return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  public merge(left: number[], right: number[]): number[] {
    const array: number[] = [];
    let lIndex = 0;
    let rIndex = 0;

    while (lIndex + rIndex < left.length + right.length) {
      const lItem = left[lIndex];
      const rItem = right[rIndex];

      if (lItem == null) {
        array.push(rItem);
        rIndex++;
      } else if (rItem == null) {
        array.push(lItem);
        lIndex++;
      } else if (lItem < rItem) {
        array.push(lItem);
        lIndex++;
      } else  {
        array.push(rItem);
        rIndex++;
      }
    }
   // setTimeout(() => {
      return array;
   // }, 500);
  }
}

