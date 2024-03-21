import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type DialogData = {
  title: string;
  text: string;
};

@Component({
  selector: 'app-simple-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>
    <div mat-dialog-content>
      {{ data.text }}
    </div>
    <div mat-dialog-actions>
      <button [mat-dialog-close]="false" mat-button>Cancel</button>
      <button [mat-dialog-close]="true" mat-button>Ok</button>
    </div>
  `,
  styleUrls: ['./simple-dialog.component.scss'],
})
export class SimpleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
