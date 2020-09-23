import { Component } from '@angular/core';

@Component({
  selector: 'app-error-button',
  template: '<button (click)="onClick($event)">Click me to throw an error.</button> {{clickMessage}}'
})
export class ClickErrorComponent {
  clickMessage = '';

  onClick(event: any) {
    this.clickMessage = ('An error has been sent to Sentry.io');
    this.uriError();
  }

  uriError() {
    decodeURIComponent('%');
  }
}
