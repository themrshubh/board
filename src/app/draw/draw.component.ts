import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {
  stageOne = [
    'Data Pull',
  ];

  stageTwo = [
    'Data Cleanse',
    'Data Embed',
  ];

  stageThree = [
    'Data Dedup',
    'Data Learning Matcher',
    'Std Mapper',
    'Join and Relationship',
  ];

  stageFour = [
    'Data Merge'
  ];

  stageFive = [
    'Finalize',
  ];

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
