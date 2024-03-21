import { Component } from '@angular/core';
import { Confirmable } from './shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-root',
  template: `<button (click)="openModal()" color="primary" mat-raised-button>
      Abrir Modal
    </button>
    <div>{{ this.confirmed }}</div> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dialog-decorator';
  public confirmed: boolean = false;

  @Confirmable()
  public openModal(): void {
    this.confirmed = true;
  }
}
