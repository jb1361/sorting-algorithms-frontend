import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AlgorithmGraphComponent } from './component/algorithm-graph/algorithm-graph.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NotFoundComponent, AlgorithmGraphComponent],
  exports: [AlgorithmGraphComponent]
})
export class UtilModule { }
