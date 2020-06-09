import { Component } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  dragEnd(event: CdkDragEnd) {
    console.log("HERE")
    console.log(event);
    let myStorage = window.localStorage;
  }
}
