import { Component, Input } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})

export class PlotComponent {
  @Input() name = '';
  @Input() funFact = '';

  constructor(public dialog: MatDialog){}

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        name: this.name,
        funFact: this.funFact
      },
    });
  }
}
